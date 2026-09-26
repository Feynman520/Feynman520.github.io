---
title: 공무원을 위한 클로드코드
slug: public-servant
tagline: 공문서의 책임은 내가, 취합·서식·검산은 에이전트가 — 39개의 실전 레시피
status: 출간 준비 중
order: 9
cover: /covers/public-servant.jpg
spec: 39개 실전 레시피
recipes: 39
store: []
downloads:
  - label: 공무원권 데이터셋
    file: /files/public-servant/dataset.zip
    size: 952KB
    note: 가상 도시 가온시 평생교육팀 한도담 주무관의 업무 폴더 7묶음(보고서·공문서식·예산정산·홍보·의회감사·회의기록·민원). 동별 수요조사 제출본과 상반기 실적(xlsx), 받은 공문 10건(PDF)과 한/글 서식(hwp), 보조금 정산서, 의회 자료요구, 회의 녹취, 민원 접수 기록 등. 실제 업무처럼 일부러 심어 둔 오류와 함정 포함, 책의 예시를 그대로 재현하는 가상 행정 데이터
  - label: 클로드코드 세팅 가이드 (공무원권)
    file: /files/public-servant/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/public-servant/cheatsheet.pdf
    size: 458KB
    note: 책의 복붙 프롬프트 39개 레시피분을 공직 달력 순서로 한자리에 (부록 A)
updated: "2026-09-26"
---

금요일 오후 다섯 시, 시청 4층 평생학습과. 보고서의 방향은 이미 머릿속에 있는데, 열두 개 동에서 온 엑셀을 한 표로 모으고, 한/글 양식의 표 칸과 개조식 기호를 맞추고, 합계와 증감률을 두 번씩 검산하는 사이 퇴근이 늦어집니다. 판단에 쓴 시간은 삼십 분인데 시계는 여덟 시 사십 분입니다. 퇴근은 **판단이 아니라 판단의 주변**에서 늦어집니다.

이 책은 그 판단의 주변, 곧 취합·서식·검산·대조를 AI 에이전트 **클로드코드**에게 맡기는 법을 다룹니다. 동별 제출본을 한 장 요약보고서로, 받은 공문을 처리대장으로, 한/글 정부양식을 자동 채움과 PDF로, 정산서를 검산표로, 회의 녹취를 회의록과 인수인계서로 바꾸는 **나만의 행정 비서**를 들이는 것입니다. 정리·계산·초안은 에이전트가 하고, 공문서에 이름을 올리는 판단과 책임은 끝까지 공무원이 집니다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">퇴근은 판단 주변에서 늦어진다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 금요일 오후 다섯 시의 시간 해부</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 판단과 책임은 나의 것, 취합·서식·검산은 에이전트의 몫</li>
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
        <li>2-5 안전 수칙과 공무원 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">보고서·계획서</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 자료 뭉치를 한 장 요약보고서로</li>
        <li>4-2 사업계획서 뼈대 세우기</li>
        <li>4-3 법령·지침·타 기관 사례 조사</li>
        <li>4-4 결과보고서·성과 정리</li>
        <li>4-5 보고서 문체·형식 다듬기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">공문·정부양식</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 받은 공문 정리와 처리대장</li>
        <li>5-2 기안문 초안</li>
        <li>5-3 HWP를 HWPX로 일괄 전환</li>
        <li>5-4 HWPX 정부양식 자동 채움에서 PDF까지</li>
        <li>5-5 명단 × 서식 대량 생성</li>
        <li>5-6 제출 서식 취합과 정합성 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">데이터·예산·정산</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 실적·현황 취합</li>
        <li>6-2 통계표·차트 리포트</li>
        <li>6-3 예산 요구·편성 기초자료</li>
        <li>6-4 보조금·행사 정산 검산</li>
        <li>6-5 시스템 입력 전 교차검산</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">보도자료·홍보</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 보도자료 초안</li>
        <li>7-2 홈페이지 공지·SNS 문안</li>
        <li>7-3 카드뉴스·포스터 기획</li>
        <li>7-4 행사 계획·식순·기념사</li>
        <li>7-5 정책 Q&amp;A·설명자료</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">의회·감사</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 자료요구 접수·분류·배분표</li>
        <li>8-2 요구자료 답변서와 일관성 대조</li>
        <li>8-3 주요업무보고 자료</li>
        <li>8-4 예상 질의·답변 뱅크</li>
        <li>8-5 감사 수감 준비</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">회의·기록·인수인계</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 회의 자료·안건 요약</li>
        <li>9-2 회의록·회의결과 보고</li>
        <li>9-3 주간·월간 업무보고 자동 정리</li>
        <li>9-4 업무 인수인계서</li>
        <li>9-5 업무편람·매뉴얼 자산화</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">민원 응대</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 민원 답변서 초안</li>
        <li>10-2 반복·유사 민원 분류와 답변 뱅크</li>
        <li>10-3 정보공개청구 대응 보조</li>
        <li>10-4 답변 전 최종 검증</li>
        <li>10-5 악성·특이 민원 대응 문안과 기록</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 우리 부서 점검기, 스킬로 만들기</li>
        <li>11-2 예약으로 처리하기</li>
        <li>11-3 우리 부서 작은 도구 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">전부 판단의 주변이었다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>전부 판단의 주변이었다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 겪는 문제 FAQ</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 공무원 보안·검증 체크리스트</li>
        <li>부록 E. 2026 공직 제도 격변 요약</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상 도시 **가온시** 평생교육팀 데이터로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 비공개 행정정보와 민원인 개인정보는 넣지 않는다는 공무원 레드라인 5를 기능보다 앞에 두었고, 온나라·e호조+·e나라도움 같은 업무 시스템에는 비서가 직접 들어가지 않습니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
