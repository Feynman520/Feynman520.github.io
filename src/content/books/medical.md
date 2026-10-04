---
title: 의료인을 위한 클로드코드
slug: medical
tagline: 진료는 의료인이, 주변부는 에이전트가 — 39개의 실전 레시피
status: 판매 중
order: 14
cover: /covers/medical.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 교보문고 (전자책 · eBook)
    url: https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013660131
  - name: 알라딘 (전자책 · eBook)
    url: https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=403498982
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225661
downloads:
  - label: 의료인권 데이터셋
    file: /files/medical/dataset.zip
    size: 933KB
    note: 가상의 온누리시 해오름동 '새봄가정의학과의원'의 자료. 환자안내·알림홍보·지견서재(가상 논문 PDF·지침 두 판)·직원운영·행정서식(보건소 공문·한글 서식)·경영(수입·비용·재고·향정 장부)·청구준비(비식별 심사 조정 집계) 7개 폴더 53파일과 정답지 README. 서로 어긋난 두 메모·의료광고 위험 표현·없는 논문 인용·교육 미이수·장부 누락·게시 가격 불일치 같은 일부러 심어 둔 함정 포함, 환자 개인정보는 한 줄도 없고 인물·기관·논문·고시·공문까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (의료인권)
    file: /files/medical/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/medical/cheatsheet.pdf
    size: 437KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-04"
---

수요일 오후 여섯 시 반, 6년째 동네 의원을 꾸리는 가정의학과 전문의 서다온 원장(44)의 마지막 환자가 진료실을 나섭니다. 그때 행정실장이 서류 파일을 들고 문을 두드립니다. 추석 휴진 공지를 문자·홈페이지·출입문·전화 멘트 네 군데에 맞춰 쓰고, 보건소 공문 세 건에서 무엇을 언제까지 내야 하는지 찾고, 직원 법정의무교육 이수 현황의 빈칸을 확인하다 보면 모니터의 시계가 밤 열 시를 넘깁니다. 진료로 쓰는 시간보다 진료 뒤에 쓰는 시간이 긴 날, **진료가 끝난 뒤의 두 번째 근무**입니다.

이 책은 그 두 번째 근무를 덜어 내는 법을 다룹니다. 내 컴퓨터 안의 의원 기본 정보와 옛 안내문, 공문과 한글 서식, 이수 대장과 근무표, 재고 파일과 심사 조정 집계를 AI 에이전트 **클로드코드**가 직접 읽고, 진료 안내문 한 벌, 네 채널 휴진 공지, 공문 할 일표, 연간 의무 캘린더, 월간 운영 리포트, 이의신청서 초안을 파일로 만들어 주는 **나만의 원무 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 진료는 의료인이, 주변부는 에이전트가. 안내문의 의학 내용은 원장과 약사가 확정한 메모에서만 옮기고, 메모끼리 어긋나면 비서는 고르지 않고 "원장 확인 필요"로 표시합니다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">진료는 끝났는데 퇴근을 못 한다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 진료가 끝난 뒤의 두 번째 근무</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 진료는 의료인이, 주변부는 에이전트가</li>
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
        <li>2-5 안전 수칙과 의료인 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">환자 안내·교육</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 진료 안내문 한 벌 만들기</li>
        <li>4-2 검사·시술 전후 주의사항</li>
        <li>4-3 질환 설명·생활수칙 교육자료</li>
        <li>4-4 복약 안내문 정리 보조</li>
        <li>4-5 다국어 안내문</li>
        <li>4-6 대기실 게시물·포스터</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">병원 알림·온라인 소식</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 휴진·진료시간 변경 공지 한 번에</li>
        <li>5-2 홈페이지 문안 정비</li>
        <li>5-3 건강정보 글 초안</li>
        <li>5-4 의료광고 자가 점검 리포트</li>
        <li>5-5 리뷰·문의 응대 문안</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">최신 지견 서재</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 논문 PDF 정리와 한글 요약</li>
        <li>6-2 주제별 지견 브리핑, 인용 대조까지</li>
        <li>6-3 지침 개정판 대조표</li>
        <li>6-4 학회 다녀와서 정리</li>
        <li>6-5 원내 집담회 발표자료</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">직원 교육·원내 운영</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 법정의무교육 자료와 이수 대장</li>
        <li>7-2 원내 표준업무절차(SOP) 만들기</li>
        <li>7-3 신규 직원 온보딩 안내서</li>
        <li>7-4 근무표·당직표 짜기</li>
        <li>7-5 회의록과 회람</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">행정 서식·의무 일정</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 공문 요지·회신 초안</li>
        <li>8-2 HWP 서식 자동 채움, PDF까지</li>
        <li>8-3 연간 의무 캘린더</li>
        <li>8-4 개인정보보호 자율점검 준비</li>
        <li>8-5 시설·감염관리 기록 대장</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">병원 경영 문서·데이터</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 수입 구성 분석</li>
        <li>9-2 비용·손익 간이 정리</li>
        <li>9-3 재고·발주와 마약류 재고 대조</li>
        <li>9-4 월간 운영 리포트</li>
        <li>9-5 연간 계획·경영 회의 자료</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">심사·청구 준비</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 심사 조정 내역 통계 분석</li>
        <li>10-2 급여기준·고시 정리표</li>
        <li>10-3 착오청구 예방 체크리스트</li>
        <li>10-4 이의신청서 초안</li>
        <li>10-5 비급여 보고·고지 자료 준비</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 원무 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 처리하기</li>
        <li>11-3 나만의 의원 도구 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">서류는 비서에게, 환자 곁에는 내가</span></summary>
      <ul class="book-toc-list" role="list">
        <li>서류는 비서에게, 환자 곁에는 내가</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 안전·환자정보·광고 체크리스트</li>
        <li>부록 E. 제도 요약과 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 의원 **새봄가정의학과의원**과 이웃 늘푸른약국의 자료로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 레시피마다 원장·간호사·약사·행정 가운데 누구에게 특히 유용한지, 환자정보나 광고심의처럼 무엇을 조심해야 하는지 배지로 표시했으며, 이수 인원·손익·조정 금액처럼 틀리면 곤란한 숫자는 엑셀로 다시 계산해 확인합니다. 환자 정보를 외부 AI에 넣지 않기, AI의 답을 진단·치료·처방의 근거로 쓰지 않기, 진단서·처방전·의무기록·소견서를 AI로 만들지 않기, 의료광고는 게시 전에 금지 유형 점검하기, 급여기준·고시·서식은 그해 공식본에서 확인하기. 의료인 레드라인 5를 기능보다 앞에 두었습니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
