---
title: 온라인셀러를 위한 클로드코드
slug: online-seller
tagline: 판은 플랫폼이 깔지만, 데이터는 내가 가진다 — 39개의 실전 레시피
status: 판매 중
order: 18
cover: /covers/online-seller.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225969
downloads:
  - label: 온라인셀러권 데이터셋
    file: /files/online-seller/dataset.zip
    size: 347KB
    note: 가상의 새빛시에서 스마트스토어와 쿠팡에 주방·살림 용품을 파는 온라인 스토어 '소담살림'의 자료. 가게·조사·등록·주문·정산·시즌·멀티채널·CS 8개 폴더 88파일(연습용 수수료 가정표·두 채널 주문과 정산 내역·도매처 품절 공지·송장 파일·대량 등록 초안·상품 이미지·경쟁 상점 저장본·리뷰 300건·문의 기록 등)과 정답지 README. 남의 상표가 섞인 키워드·반복 단어와 과장 표현이 섞인 상품명과 상세페이지 초안·두 번 찍힌 주문 줄·음수 재고·앞자리 0이 사라지기 쉬운 송장 번호·두 번 빠진 수수료·판 적 없는 할인 전 가격·수신을 거부했는데 명단에 남은 고객·셀러의 메모와 법이 다른 반품 판단 같은 일부러 심어 둔 함정 포함, 인물·가게·거래처·경쟁 상점·상표·주문번호·전화·주소까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (온라인셀러권)
    file: /files/online-seller/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/online-seller/cheatsheet.pdf
    size: 460KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-04"
---

새벽 한 시, 새 상품 열두 개 가운데 세 개. 새빛시의 작은 집 겸 창고에서 온라인 스토어 『소담살림』을 혼자 꾸리는 한소담은 스마트스토어와 쿠팡 두 곳에서 주방·살림 용품을 위탁으로 팔고, 직접 사입한 그래놀라 한 종류를 함께 팝니다. 오전 9시에는 열 이름도 옵션 표기도 다른 두 채널의 주문을 한 표로 합쳐 발주서를 만들고, 오전 11시에는 도매처 품절 공지 속 상품을 두 채널에서 내립니다. 오후 3시에는 답하지 못한 문의 23건을 한 건씩 읽고, 오후 6시에는 택배사의 추석 전 마지막 접수일에서 거꾸로 계산해 배송 마감 공지를 씁니다. 저녁을 먹고 나서야 새 상품 열두 개 등록을 시작해, 새벽 한 시에 세 개를 끝냈습니다. **그날 소담이 "무엇을 팔까"를 고민한 시간은 거의 없었습니다. 대부분은 이 파일에서 저 파일로, 이 화면에서 저 화면으로 옮겨 적는 시간이었습니다.**

이 책은 그 옮겨 적는 시간을 덜어 내는 법을 다룹니다. 내 노트북 안의 도매처 상품 파일과 두 채널의 주문서, 정산 내역과 리뷰, 문의 기록을 AI 에이전트 **클로드코드**가 직접 읽고, 상품명 초안, 옵션 정리표, 발주서, 송장 파일, 정산 대조표, 월간 손익 보고서, 답변 초안을 파일로 만들어 주는 **나만의 판매 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 상품 등록, 게시, 고객 발송, 환불 확정, 발주 전송. 이 다섯 개의 버튼은 이 책 어디에서도 비서가 누르지 않습니다. 만드는 것은 적극적으로, 게시 버튼은 사람이 누릅니다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">파는 시간보다 옮겨 적는 시간이 많다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 새벽 한 시의 상품 등록</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 판은 플랫폼이 깔지만, 데이터는 내가 가진다</li>
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
        <li>2-5 안전 수칙과 셀러 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">아이템 조사·소싱</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 키워드·수요 조사 정리</li>
        <li>4-2 경쟁 상세페이지 벤치마킹</li>
        <li>4-3 마진 계산기 만들기</li>
        <li>4-4 소싱 전 규제·권리 점검표</li>
        <li>4-5 도매처 비교와 품절 위험 평가</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">상품 등록</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 상품명 초안과 반복 단어 점검</li>
        <li>5-2 옵션·속성 정리표</li>
        <li>5-3 상세페이지 기획과 카피 초안</li>
        <li>5-4 상세페이지 배너 만들기</li>
        <li>5-5 대량 등록 엑셀 정비</li>
        <li>5-6 게시 전 표시·광고 자가 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">주문·재고·배송</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 두 채널 주문 합치기와 발주서</li>
        <li>6-2 재고·품절 점검표</li>
        <li>6-3 송장 파일 변환과 검증</li>
        <li>6-4 배송 지연·품절 안내문 세트</li>
        <li>6-5 반품·회수 관리 대장</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">정산·장부</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 정산 내역 맞춰 보기</li>
        <li>7-2 수수료·마진 실측</li>
        <li>7-3 월간 손익 보고서</li>
        <li>7-4 부가세 신고 준비 자료</li>
        <li>7-5 자금 달력</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">시즌·프로모션</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 시즌 역산 달력</li>
        <li>8-2 기획전·쿠폰 문안</li>
        <li>8-3 고객 알림 메시지</li>
        <li>8-4 시즌 문의 대비 FAQ·공지</li>
        <li>8-5 시즌 복기 보고서</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">멀티채널·성장</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 채널별 등록 정보 변환</li>
        <li>9-2 채널별 매출·수수료 비교</li>
        <li>9-3 내 스토어 데이터 분석</li>
        <li>9-4 경쟁 상점 정기 점검</li>
        <li>9-5 위탁에서 사입으로, 전환 판단표</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">CS·리뷰·분쟁</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 문의 유형 분류와 답변 템플릿</li>
        <li>10-2 새 문의 답변 초안 일괄</li>
        <li>10-3 리뷰 불만 지도</li>
        <li>10-4 리뷰 답변 초안</li>
        <li>10-5 교환·반품·분쟁 대응문</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 판매 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 아침 주문·재고 브리핑 받기</li>
        <li>11-3 나만의 마진 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">옮겨 적기는 끝났고, 가게가 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>옮겨 적기는 끝났고, 가게가 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 게시 전·고객 정보·검산 체크리스트</li>
        <li>부록 E. 제도·플랫폼 요약과 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 『소담살림』과 그 도매처·택배사 자료로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 위탁 판매 셀러만을 위한 책은 아닙니다. 구매대행 셀러와 브랜드 사입 셀러를 위한 곁상자가 같은 레시피를 어떻게 바꾸어 쓰면 되는지 짚어 주고, 레시피마다 위탁과 사입 가운데 어느 쪽에 특히 맞는지, 소비자가 볼 문장을 만드는지, 법령·플랫폼 규정을 확인해야 하는지, 고객 정보를 다루는지를 배지로 알려 드립니다. 정산 금액과 청약철회 기한, 마진처럼 틀리면 곤란한 숫자는 비서의 계산과 엑셀 엔진의 계산이 맞기 전까지 쓰지 않습니다. 리뷰를 조작하지 않기, 허위·과장 광고를 게시하지 않기, 위조품과 남의 상표와 인증 누락 상품을 팔지 않기, 고객 개인정보는 내 컴퓨터 안에서 가린 뒤에 다루기, 수수료·정산·기한 숫자는 AI 혼자 계산하게 두지 않기. 셀러 레드라인 5를 기능보다 앞에 두었습니다. 책 속 수수료율과 정산 주기는 모두 연습용 가정입니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
