describe('이지페이 사이트 테스트 시트', () => {
  /* eslint-disable cypress/no-unnecessary-waiting */
  context('notLogin', () => {
    it('추천 버튼 클릭', () => {
      cy.visit('https://www.eazy-pay.online/');
      cy.wait(1500); // 1.5초 대기
      cy.get('.flex-grow > [href="/card-recommend"]').click();
      cy.wait(1500);
      cy.get(
        '[style="width: 2.5rem; height: 17.303rem; border-top-left-radius: 1rem; border-top-right-radius: 1rem; border-width: 0.25rem 0.25rem 0px; border-color: gray;"]'
      ).click();
      cy.wait(1500);
    });
  });
  context('카드 검색', () => {
    it('카테고리 클릭으로 카드 검색', () => {
      cy.visit('https://www.eazy-pay.online/card-search');
      cy.wait(500);
      cy.get('.grid > :nth-child(2)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(3)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(4)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(5)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(6)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(7)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(8)').click();
      cy.wait(500);
      cy.get('.grid > :nth-child(9)').click();
    });
    it('검색어 입력으로 카드 검색', () => {
      cy.visit('https://www.eazy-pay.online/card-search');
      cy.wait(2000);
      cy.get('.bg-blue-200\\/50 > .w-full').type('정석{enter}');
    });
  });
  context('login', () => {
    it('테스트 사용자 로그인', () => {
      cy.visit('https://www.eazy-pay.online/login');
      cy.wait(500);
      cy.get('#id').type('test');
      cy.get('#password').type('1234');
      cy.wait(1000);
      cy.get('.space-y-6 > :nth-child(3) > .flex').click();
    });
  });

  context('myPage', () => {
    beforeEach(() => {
      cy.visit('https://www.eazy-pay.online/login');
      cy.wait(500);
      cy.get('#id').type('test');
      cy.get('#password').type('1234');
      cy.wait(1000);
      cy.get('.space-y-6 > :nth-child(3) > .flex').click();
    });
    it('최근 이용 내역', () => {
      cy.get('[href="/mypage"]').click();
      cy.wait(1000);
      cy.get('.w-1\\/2 > :nth-child(2) > .text-2xl').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .pr-2').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > .pr-2').click();
      cy.wait(4000);
    });
    it('카드 관리', () => {
      cy.get('[href="/mypage"]').click();
      cy.get('.w-full.undefined > .flex-col.w-full > :nth-child(1) > .w-full > .flex-col').click();
      cy.get('.text-lg > .flex-col > :nth-child(2) > .flex > div').click();
      cy.wait(1000);
      cy.get('.bg-red-500').click();
      cy.wait(1000);
      cy.get('.text-lg > .flex-col > :nth-child(2) > .flex > div').click();
      cy.wait(1000);
      cy.get('.bg-red-500').click();
    });
  });

  context('shopping', () => {
    beforeEach(() => {
      cy.visit('https://www.eazy-pay.online/login');
      cy.get('#id').type('test');
      cy.get('#password').type('1234');
      cy.get('.space-y-6 > :nth-child(3) > .flex').click();
    });
    it('상품 선택', () => {
      cy.visit('https://www.eazy-pay.online/shopping');
      cy.wait(1500);
      cy.get('.grid > :nth-child(2) > .w-full').click();
      cy.wait(1500);
      cy.get('.w-full > .mt-2').click();
      cy.wait(1500);
      cy.get('[data-glide-dir=">"] > .w-20').click();
      cy.wait(1500);
      cy.get('[data-glide-dir=">"] > .w-20').click();
      cy.wait(1500);
      cy.get(':nth-child(2) > .text-lg').click();
    });
  });
  /* eslint-disable cypress/no-unnecessary-waiting */
});
