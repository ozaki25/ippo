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
