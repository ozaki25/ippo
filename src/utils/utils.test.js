import tweetFormat from './tweetFormat';

describe('#detectHashtag', () => {
  describe('キーワードを含まない場合', () => {
    test('1件も返らないこと', () => {
      const text = `テストツイートです
      キーワードは含みません`;
      const actual = tweetFormat.detectHashtag(text);
      expect(actual).toMatchObject([]);
    });
  });
  describe('キーワードを含む場合', () => {
    describe('タグの直後が半角スペースの場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイート#test です
        キャンセルします`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test']);
      });
    });
    describe('タグの直後が全角スペースの場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイート#test　です
        キャンセルします`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test']);
      });
    });
    describe('タグの直後が改行の場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイートです
        #test
        キャンセルします`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test']);
      });
    });
    describe('タグで開始する場合', () => {
      test('1件が返ること', () => {
        const text = `#test
        テストツイート`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test']);
      });
    });
    describe('タグで終了する場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイート
        テスト#test`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test']);
      });
    });
    describe('複数該当する場合', () => {
      test('すべて返ること', () => {
        const text = `テストツイート#test_1 です
        #test_2
        キャンセル#test_3　します`;
        const actual = tweetFormat.detectHashtag(text);
        expect(actual).toMatchObject(['#test_1', '#test_2', '#test_3']);
      });
    });
  });
});

describe('#detectUrl', () => {
  describe('キーワードを含まない場合', () => {
    test('1件も返らないこと', () => {
      const text = `テストツイートです
      キーワードは含みません`;
      const actual = tweetFormat.detectUrl(text);
      expect(actual).toMatchObject([]);
    });
  });
  describe('キーワードを含む場合', () => {
    describe('urlの直後が半角スペースの場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイートhttps://github.com/ozaki25 です
        キャンセルします`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://github.com/ozaki25']);
      });
    });
    describe('urlの直後が全角スペースの場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイートhttps://github.com/ozaki25　です
        キャンセルします`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://github.com/ozaki25']);
      });
    });
    describe('urlの直後が改行の場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイートです
        https://github.com/ozaki25
        キャンセルします`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://github.com/ozaki25']);
      });
    });
    describe('urlで開始する場合', () => {
      test('1件が返ること', () => {
        const text = `https://github.com/ozaki25
        テストツイート`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://github.com/ozaki25']);
      });
    });
    describe('urlで終了する場合', () => {
      test('1件が返ること', () => {
        const text = `テストツイート
        テストhttps://github.com/ozaki25`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://github.com/ozaki25']);
      });
    });
    describe('複数該当する場合', () => {
      test('すべて返ること', () => {
        const text = `テストツイートhttps://github.com/ozaki25 です
        https://qiita.com/ozaki25/
        キャンセルhttps://ozaki25.hatenadiary.jp/entry/2018/10/31/221528　します`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject([
          'https://github.com/ozaki25',
          'https://qiita.com/ozaki25/',
          'https://ozaki25.hatenadiary.jp/entry/2018/10/31/221528',
        ]);
      });
    });
    describe('ハッシュを含む場合', () => {
      test('すべて返ること', () => {
        const text = `テストツイートhttps://qiita.com/ozaki25/items/fde66fd971690767394a#%E8%83%8C%E6%99%AF です
        テストツイート`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject([
          'https://qiita.com/ozaki25/items/fde66fd971690767394a#%E8%83%8C%E6%99%AF',
        ]);
      });
    });
    describe('クエリを含む場合', () => {
      test('すべて返ること', () => {
        const text = `テストツイートhttps://qiita.com/search?utf8=%E2%9C%93&sort=&q=react+javascript です
        テストツイート`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject([
          'https://qiita.com/search?utf8=%E2%9C%93&sort=&q=react+javascript',
        ]);
      });
    });
    // 未対応
    describe.skip('日本語を含む場合', () => {
      test('すべて返ること', () => {
        const text = `テストツイートhttps://qiita.com/search?q=日本語 です
        テストツイート`;
        const actual = tweetFormat.detectUrl(text);
        expect(actual).toMatchObject(['https://qiita.com/search?q=日本語']);
      });
    });
  });
});
