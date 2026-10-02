---
title: 자영업자를 위한 클로드코드
slug: small-business
tagline: 손님 앞은 사장님이, 장사의 뒤편은 에이전트가 — 38개의 실전 레시피
status: 판매 중
order: 17
cover: /covers/small-business.jpg
spec: 38개 실전 레시피
recipes: 38
store:
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225872
downloads:
  - label: 자영업권 데이터셋
    file: /files/small-business/dataset.zip
    size: 1.7MB
    note: 가상의 늘봄시 한울동 12석 한식 음식점 '온기식당'의 한 달 자료. 메뉴·홍보·리뷰·매출·재고·직원·세금서류 7개 폴더 61파일(메뉴 가격 원본·두 배달앱 정산서·POS 매출·영수증 촬영본·거래명세서·급여 계산표·연습용 가상 지원사업 공고 3건 등)과 정답지 README. 메뉴판 가격 불일치·원산지와 알레르기 누락·과장 광고 문구·영업시간 오기·정산 중복 차감·수식 참조 오류·단위 착오·유통기한 초과·장부 누락·주휴수당 누락·기한 오산·개인 지출 섞임·지원 요건 미달 같은 일부러 심어 둔 함정 포함, 인물·가게·거래처·배달앱·금액·전화·계좌·사업자등록번호까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (자영업권)
    file: /files/small-business/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/small-business/cheatsheet.pdf
    size: 441KB
    note: 책의 복붙 프롬프트 38개 레시피분을 한자리에 (부록 A)
updated: "2026-10-02"
---

화요일 밤 9시, 늘봄시 한울동 골목의 열두 석짜리 밥집 『온기식당』에서 마지막 손님이 된장찌개 한 그릇을 비우고 나갑니다. 3년 반째 가게를 꾸려 온 사장 강다은은 설거지와 주방 정리를 끝내고 계산대 앞에 앉습니다. 서랍에는 이번 주 안에 장부로 옮겨야 할 거래처 영수증이 수북하고, 휴대폰에는 읽지 않은 리뷰 알림이 14개 쌓여 있습니다. 두 배달앱에서 온 8월 정산서는 몇 번을 훑어도 무엇이 얼마나 빠졌는지 끝내 계산되지 않습니다. 알바생은 근무 시간을 바꿔 달라고 묻고, 상인회 단톡방에는 원산지 표시 점검이 나온다는 소식이 올라옵니다. 그날 다은이 가게 불을 끈 것은 자정이 조금 지나서였습니다. **손님 앞에서는 한 번도 지치지 않았는데, 뒤편의 일이 사장님의 새벽을 먹고 있었습니다.**

이 책은 그 뒤편의 일을 덜어 내는 법을 다룹니다. 내 노트북 안의 정산서와 영수증, 거래명세서와 메뉴판, 리뷰와 근무 기록을 AI 에이전트 **클로드코드**가 직접 읽고, 마감 일지, 정산 비교표, 원가·마진표, 발주서, 근무표, 리뷰 답글 초안을 파일로 만들어 주는 **나만의 가게 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 손님 앞은 사장님이, 장사의 뒤편은 에이전트가. 값 매기기, 붙이기(올리기), 신고하기, 이 세 개의 버튼은 이 책 어디에서도 비서가 누르지 않습니다. 계산은 비서가, 결정은 사장님이.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">손님 앞에서는 지치지 않는데</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 마감 후 30분</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 손님 앞은 사장님이, 장사의 뒤편은 에이전트가</li>
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
        <li>2-5 안전 수칙과 사장님 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">메뉴판과 안내물</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 메뉴판 새로 짜기</li>
        <li>4-2 메뉴 이름과 설명 다듬기</li>
        <li>4-3 원산지 표시판 만들기</li>
        <li>4-4 알레르기 안내표 만들기</li>
        <li>4-5 외국어 메뉴판과 가게 안내문</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">소개와 홍보</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 지도 앱·배달앱 가게 소개글</li>
        <li>5-2 SNS 한 달 게시 달력</li>
        <li>5-3 신메뉴 홍보 패키지</li>
        <li>5-4 우리 동네 상권 조사</li>
        <li>5-5 홍보 대행 제안서 검증기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">리뷰와 단골</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 리뷰 월간 리포트</li>
        <li>6-2 리뷰 답글 초안 공장</li>
        <li>6-3 곤란한 리뷰 대응</li>
        <li>6-4 단골 안내 문자 문안</li>
        <li>6-5 손님 질문 응대집</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">매출과 장부</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 하루 마감 5분 일지</li>
        <li>7-2 월 매출 리포트</li>
        <li>7-3 배달앱 정산서 뜯어보기</li>
        <li>7-4 메뉴별 원가·마진표</li>
        <li>7-5 영수증·지출 정리</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">재료·발주·재고</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 발주서 만들기</li>
        <li>8-2 재고표와 유통기한 관리</li>
        <li>8-3 거래명세서 대조와 매입 정리</li>
        <li>8-4 재료값 변동 추적</li>
        <li>8-5 연말 대목 준비 계획표</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">직원과 근무</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 근무표 짜기</li>
        <li>9-2 급여·주휴수당 검산</li>
        <li>9-3 근로계약서 준비</li>
        <li>9-4 오픈·마감 매뉴얼</li>
        <li>9-5 직원 공지와 교육 자료</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">세금·지원사업·서류</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 세금 달력</li>
        <li>10-2 부가세 신고 자료 정리</li>
        <li>10-3 종합소득세 준비 자료</li>
        <li>10-4 지원사업 요건 판정표</li>
        <li>10-5 지원사업 신청서 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 가게 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 아침 브리핑 받기</li>
        <li>11-3 나만의 판매가 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">뒤편은 끝났고, 손님이 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>뒤편은 끝났고, 손님이 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 표시·개인정보·검산 체크리스트</li>
        <li>부록 E. 제도·지원사업 요약과 연간 장사 달력</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 『온기식당』과 한울동 상인회의 자료로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 식당만을 위한 책은 아닙니다. 꽃집 『들꽃방』, 미용실 『하람헤어』, 빵집 『우진베이커리』 사장님의 곁상자가 소매점과 서비스업에서는 무엇을 바꾸어 쓰면 되는지 짚어 주고, 레시피마다 외식·소매·서비스 가운데 어느 가게에 특히 맞는지, 법이 정한 표시를 다루는지, 손님·직원의 개인정보 원본이 근처에 있는지, 두 번 계산해 맞춰야 하는지를 표시로 알려 드립니다. 정산 금액과 주휴수당, 부가세 자료처럼 틀리면 곤란한 숫자는 엑셀과 파이썬으로 두 번 계산해 맞춰 봅니다. 가짜 리뷰와 숨긴 광고는 어떤 이유로도 만들지 않기, 법이 정한 표시는 사장님이 최종 책임 지기, 손님과 직원의 개인정보 원본은 비서에게 건네지 않기, 부풀린 광고와 거짓 광고는 쓰지 않기, 세금·노무·법률 판단은 전문가와 공식 원문에게 맡기고 돈과 날짜는 두 번 계산하기. 사장님 레드라인 5를 기능보다 앞에 두었습니다. 책 속 지원사업 공고는 모두 연습용 가상 공고입니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
