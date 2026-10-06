---
title: 회계·세무인을 위한 클로드코드
slug: accounting
tagline: 계산은 검산으로, 판단은 사람으로 — 39개의 실전 레시피
status: 판매 중
order: 16
cover: /covers/accounting.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 교보문고 (전자책 · eBook)
    url: https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013666810
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225795
downloads:
  - label: 회계·세무권 데이터셋
    file: /files/accounting/dataset.zip
    size: 1.7MB
    note: 가상의 새빛시 세무사무소 '오세린 세무회계'와 거래처 (주)푸른들베이커리의 자료. 첫실행(법인카드 내역 30행)·증빙(대표 메모·이름이 뒤죽박죽인 받은 파일 18개·영수증 사진 12장·통장 카드 내역)·장부·신고(거래처 12곳 명부·2기 예정신고 자료·접수증과 납부서)·소통·조사(연습용 가상 예규·심판례 6건)·보고·운영 8개 폴더 115파일과 정답지 README. 메모에 섞인 개인정보·중복 파일·판독 불가 영수증·취소 거래·장부 누락·합계 범위 누락·요율 오적용·이중 공제·기한 오산·예규 인용 오류·광고 규정에 걸릴 수 있는 문구 같은 일부러 심어 둔 함정 포함, 인물·회사·세무서·예규·금액·식별번호까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (회계·세무권)
    file: /files/accounting/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/accounting/cheatsheet.pdf
    size: 424KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-06"
---

10월 8일 목요일 저녁 일곱 시, 새빛시에서 개업 6년 차를 맞은 세무사 오세린의 책상 달력에는 동그라미가 두 개 있습니다. 10월 12일 원천세, 그리고 10월 25일 부가가치세 2기 예정신고. 사무직원 한 명과 함께 맡은 거래처는 43곳입니다. 카페 두 곳에서 모은 영수증 봉투를 열고, 카드사마다 열 순서가 다른 법인카드 내역을 합치고, 홈택스에서 내려받은 전자세금계산서 목록과 장부를 한 줄씩 맞춰 보고, 자료가 안 온 거래처 여섯 곳에 이름과 빠진 자료를 바꿔 가며 독촉 문자를 씁니다. 자정이 다 되어 컴퓨터를 끄며 세린은 깨닫습니다. **다섯 시간 가운데 세무사로서 판단한 시간은 한 시간이 채 되지 않았습니다.** 나머지는 맞춰 보는 시간이었습니다.

이 책은 그 맞춰 보는 시간을 덜어 내는 법을 다룹니다. 내 컴퓨터 안의 증빙과 통장·카드 내역, 장부와 급여대장, 홈택스에서 내려받은 신고 자료와 거래처 명부를 AI 에이전트 **클로드코드**가 직접 읽고, 가린 사본, 지출대장, 증빙과 장부의 대사표, 급여 검산표, 부가세 신고 전 대사표, 거래처별 안내문 초안, 가결산 리포트를 파일로 만들어 주는 **나만의 회계 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 계산은 검산으로, 판단은 사람으로. 비서는 합계와 세액을 엑셀 엔진이나 두 번째 방법으로 다시 계산해 맞기 전까지 '미검산'으로 두고, 계정과 세법 판단은 후보와 확인 요청까지만 내놓습니다. 신고·납부·발송, 이 세 개의 버튼은 이 책 어디에서도 비서가 누르지 않습니다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">판단할 시간보다 맞춰 볼 시간이 많다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 10월 25일을 앞둔 밤</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 계산은 검산으로, 판단은 사람으로</li>
        <li>1-4 에이전트에게 건네는 세 가지</li>
        <li>1-5 이 책 사용법</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">2부</span><span class="book-toc-name">클로드코드 기초</span></summary>
      <ul class="book-toc-list" role="list">
        <li>2-1 클로드코드란</li>
        <li>2-2 능력의 구조</li>
        <li>2-3 CLAUDE.md</li>
        <li>2-4 기억의 구조</li>
        <li>2-5 안전 수칙과 회계·세무 레드라인 5</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">3부</span><span class="book-toc-name">클로드코드 세팅</span></summary>
      <ul class="book-toc-list" role="list">
        <li>3-1 클로드코드 설치하기</li>
        <li>3-2 에이전트 영혼폴더 만들기</li>
        <li>3-3 클로드코드 소환하기</li>
        <li>3-4 기본 명령 딱 7개</li>
        <li>3-5 세팅 가이드로 완성하기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">증빙·자료 수집</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 거래처 자료 가리기(마스킹) 파이프라인</li>
        <li>4-2 증빙 파일 대량 정리</li>
        <li>4-3 영수증 사진을 지출대장으로</li>
        <li>4-4 통장·카드 내역 표준화</li>
        <li>4-5 증빙과 장부 대사</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">기장·장부</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 계정과목 분류 보조</li>
        <li>5-2 매출·매입 월별 집계</li>
        <li>5-3 거래처 원장과 미수금</li>
        <li>5-4 급여대장·원천세 검산</li>
        <li>5-5 세무 프로그램 입력 전 정리·검산</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">신고 시즌</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 신고 캘린더·거래처별 진행표</li>
        <li>6-2 부가세 신고 전 대사</li>
        <li>6-3 원천세·지급명세서 준비</li>
        <li>6-4 연말정산 자료 점검</li>
        <li>6-5 종소세·법인세 신고 준비</li>
        <li>6-6 신고 후 마무리</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">고객사 소통</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 자료 누락 추적과 독촉 안내문</li>
        <li>7-2 신고 결과 안내, 한 번에 개인화</li>
        <li>7-3 세금 일정·개정 안내 뉴스레터</li>
        <li>7-4 고객 질문 답변 초안</li>
        <li>7-5 메일·문의 정리</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">세법·예규 조사</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 세법 개정 추적·전후 비교표</li>
        <li>8-2 예규·심판례 조사, 원문 대조까지</li>
        <li>8-3 사안 검토 메모 초안</li>
        <li>8-4 상담 준비 브리핑</li>
        <li>8-5 국세청 안내자료 소화하기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">보고서·재무분석</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 가결산 리포트</li>
        <li>9-2 재무제표 추이·비율 분석</li>
        <li>9-3 월별 경영 리포트</li>
        <li>9-4 세 부담 시나리오 비교 검산</li>
        <li>9-5 월말 결산 체크리스트·마감 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">사무소·업무 운영</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 거래처 관리 대장</li>
        <li>10-2 신고 진행 현황판</li>
        <li>10-3 업무 매뉴얼·인수인계</li>
        <li>10-4 수임 계약·안내 문서</li>
        <li>10-5 사무소 알리기, 광고 규정 자가 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 회계 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 신고 기한 브리핑 받기</li>
        <li>11-3 나만의 가산세 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">숫자는 맞춰졌고, 판단이 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>숫자는 맞춰졌고, 판단이 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 비밀엄수·가림·검산 체크리스트</li>
        <li>부록 E. 세법·제도 요약과 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 세무사무소 **오세린 세무회계**와 거래처 (주)푸른들베이커리의 자료로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 4부부터 9부까지는 푸른들베이커리 한 곳을 7~9월 증빙에서 2기 예정신고와 경영 리포트까지 따라가고, 같은 회사의 경리 과장 백지우의 책상에서 쓰는 법도 함께 보여 줍니다. 레시피마다 세무사무소와 회사 경리 가운데 어디에 특히 쓸모 있는지, 거래처 재무·개인정보를 다루는지, 금액·세액·기한을 엑셀 엔진이나 두 번째 방법으로 맞춰 봐야 하는지 배지로 표시했습니다. 거래처 재무·개인정보를 그대로 넣지 않기, AI가 세무대리를 하는 것이 아님을 지키기, AI의 암산을 믿지 않기, 홈택스와 세무 프로그램을 자동 조작하지 않기, 세법은 해마다 바뀐다는 것을 잊지 않기. 회계·세무 레드라인 5를 기능보다 앞에 두었습니다. 책 속 예규·심판례는 모두 연습용 가상 자료이고, 세법과 기한은 2026년 9월 기준입니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
