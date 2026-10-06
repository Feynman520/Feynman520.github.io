---
title: 강사를 위한 클로드코드
slug: instructor
tagline: 문제는 비서가 뽑아도, 정답은 강사가 책임진다 — 39개의 실전 레시피
status: 판매 중
order: 21
cover: /covers/instructor.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1226225
downloads:
  - label: 강사권 데이터셋
    file: /files/instructor/dataset.zip
    size: 71KB
    note: 가상의 새빛시에서 1인 교습소 『하람수학 교습소』를 운영하는 윤하람 선생님의 2026년 2학기 자료. 교습소·교안·출제·성적·소통·홍보·온라인·운영 8개 폴더 46파일(반 편성과 공휴일, 단원표와 학기 일정, 수업 메모와 새빛고 지난 시험 분석표, 흩어진 자작 문항 모음과 중간대비 모의고사 초안, 월말평가·문항별 정오·출결·과제·레벨테스트 기록, 상담 예약과 상담 메모·일정 변경 메모·기업 출강 문의 메일, 교습소 기본정보·블로그 메모·카드뉴스와 광고 문안, 인강 플랫폼 조건과 카톡방 질문 로그, 수강료 수납·퇴원 요청·경비 장부·교습비 게시표와 신고 내역·민원 사례 등)과 정답지 README. 정답표가 틀린 모의고사 문항·답이 둘인데 하나만 적힌 레벨테스트 정답·배점 합계가 98점인 시험지 구성표·같은 문항이 세 쌍 겹친 문항 모음·반 편성에 없는 퇴원생의 성적·다른 학생 코드가 섞인 상담 메모·정규 수업과 겹친 보강 일정·학생 실명이 남은 블로그 메모·'합격률 100%' 같은 광고 문안·신고액보다 높게 적힌 교습비 게시표·가족 장보기가 섞인 경비 장부 같은 일부러 심어 둔 함정 포함, 인물·교습소·학교·기업·플랫폼·교육지원청·전화번호·메일 주소까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (강사권)
    file: /files/instructor/setup-guide.md
    size: 2.0MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함. 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/instructor/cheatsheet.pdf
    size: 440KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-07"
---

2026년 9월 14일 월요일 밤 11시, 새빛시의 1인 교습소 『하람수학』에서 윤하람 선생님은 불을 반만 끄고 다시 책상에 앉습니다. 대형 입시학원에서 수학을 8년 가르친 뒤 지난 3월 교습소를 열었고, 이제 개원 일곱 달째입니다. 수강생은 34명, 반은 다섯 개입니다. 오늘 하루를 시각별로 적어 보면 오전에는 과제를 반별로 정리했고, 오후에는 판서 노트를 손보고 학부모 전화 두 통을 받았고, 블로그 글은 첫 문장만 쓰고 멈췄습니다. 오후 5시 30분부터 9시 40분까지의 수업만이 온전히 가르치는 시간이었습니다. 책상에는 아직 내일 나갈 수준별 학습지, 토요일에 볼 신규생 8명의 레벨테스트 채점표, 답장을 기다리는 학부모 문자 세 통, 이번 주에 올리기로 한 블로그 글이 쌓여 있습니다. **강사의 시간은 학생 앞에 서는 가르치는 시간과, 그 한 시간을 위해 책상 앞에서 보내는 만드는 시간으로 나뉩니다. 교습소를 연 뒤 가르치는 시간은 그대로인데, 만드는 시간이 두 배가 넘게 늘었습니다.**

이 책은 그 만드는 시간을 덜어 내는 법을 다룹니다. 지난 학기 문항과 반별 진도, 성적 대장과 상담 메모, 수납 기록을 AI 에이전트 **클로드코드**가 직접 읽고, 진도표, 판서 노트, 수준별 학습지, 시험지와 정답표, 문항 은행, 오답 분석표, 학생별 성적 리포트, 상담 브리핑, 안내문 초안, 설명회 역산 달력, 수강료 수납 대장, 교습비 반환 계산표를 파일로 만들어 주는 **나만의 수업 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 시험지 배포, 학부모 발송, 공지 게시, 수강료 청구, 환불 확정, 신고. 이 여섯 개의 버튼은 언제나 사람이 누르고, 비서가 만든 것은 이 버튼 앞에서 언제나 초안으로 멈춥니다. 정답표 한 칸이 틀리면 학생이 맞은 문제를 틀렸다고 배우고, 수강료 계산 한 줄이 틀리면 학부모와의 신뢰가 흔들리기 때문입니다. 그래서 학생 앞에 내놓는 정답과 점수와 금액은 서로 다른 두 방법으로 구해 같은지 확인한 뒤에만 냅니다. 만드는 것은 적극적으로, 학생 앞에 내놓는 것은 검산한 뒤에. 문제는 비서가 뽑아도, 정답은 강사가 책임진다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">가르치는 시간보다 만드는 시간이 많다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 밤 열한 시의 교습소</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 문제는 비서가 뽑아도, 정답은 강사가 책임진다</li>
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
        <li>2-5 안전 수칙과 강사 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">교안·수업 준비</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 학기 커리큘럼·진도표</li>
        <li>4-2 판서 노트·교안 초안</li>
        <li>4-3 수준별 학습지 3단</li>
        <li>4-4 수업 슬라이드·유인물</li>
        <li>4-5 출제 경향 브리핑</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">문제 출제·시험 대비</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 개념 확인 문제 세트</li>
        <li>5-2 쌍둥이·변형 문제</li>
        <li>5-3 내신 예상 문제와 해설</li>
        <li>5-4 시험지 조판과 정답표</li>
        <li>5-5 나만의 문항 은행</li>
        <li>5-6 배포 전 문항 검산 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">성적·수강생 관리</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 성적 대장 정리와 추이</li>
        <li>6-2 오답 분석과 클리닉 배정</li>
        <li>6-3 출결·과제 대장 점검</li>
        <li>6-4 레벨테스트 채점과 반 배정</li>
        <li>6-5 학생별 성적 리포트</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">학부모 소통</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 상담 전 학생 브리핑</li>
        <li>7-2 상담 뒤 요약 메시지</li>
        <li>7-3 월간 학습 안내문</li>
        <li>7-4 보강·휴강·일정 변경 공지</li>
        <li>7-5 기업 출강 문의 회신과 견적</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">홍보·수강생 모집</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 교습소 소개 한 장</li>
        <li>8-2 블로그 연재 글 초안</li>
        <li>8-3 카드뉴스와 전단</li>
        <li>8-4 설명회 역산 달력과 안내 패키지</li>
        <li>8-5 광고 문구 자가 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">온라인 강의·콘텐츠 확장</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 인강 플랫폼 조건 비교</li>
        <li>9-2 강의 대본과 콘티</li>
        <li>9-3 강의 소개 페이지</li>
        <li>9-4 자작 문항 자료집 패키징</li>
        <li>9-5 질문 로그를 Q&amp;A 자산으로</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">운영·정산·민원</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 수강료 수납·미납 대장</li>
        <li>10-2 교습비 반환 계산과 안내문</li>
        <li>10-3 경비 장부와 종합소득세 준비 자료</li>
        <li>10-4 교습비 게시표 점검</li>
        <li>10-5 학부모 민원 대응문</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 수업 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 수업 전 브리핑 받기</li>
        <li>11-3 나만의 교습비 반환 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">베껴 만들기는 끝났고, 수업이 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>베껴 만들기는 끝났고, 수업이 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 배포 전·학생 정보·검산 체크리스트</li>
        <li>부록 E. 제도·법령 요약과 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 『하람수학』과 그 자료로 실제로 돌려 본 결과만 실었고, 정답과 금액은 두 방법으로 검산했으며, 같은 데이터셋으로 독자가 그대로 따라 할 수 있습니다. 교습소 원장만을 위한 책은 아닙니다. 대형학원에 소속된 영어 강사, 기업 출강과 인터넷 강의를 함께 하는 성인 대상 강사를 위한 곁상자가 같은 레시피를 학원 규칙이 있는 자리와 성인 교육의 일에 맞게 어떻게 바꾸면 되는지 짚어 주고, 레시피마다 소속 강사와 원장·1인 운영자 가운데 누구에게 특히 맞는지, 학생·학부모 정보를 다루는지, 법규를 그해 공식본으로 확인해야 하는지, 학생 앞에 내놓기 전에 두 방법 검산이 필요한지를 배지로 알려 드립니다. 한 번 만든 출제 규칙과 문항 은행, 광고 점검 사전은 다음 레시피의 재료가 되고, 반복하는 일은 /문항검산, /리포트, /공지 같은 스킬로 묶여 내 영혼폴더에 쌓입니다. 학생·학부모 개인정보는 가림 처리부터 하기, 남의 문항과 교재를 옮기지 않기, 실적과 효과를 부풀리지 않고 선행학습을 부추기는 광고를 하지 않기, 게시·신고 의무는 템플릿으로 챙기기, 학생 앞에 내놓는 것은 두 방법으로 검산한 뒤에 내기. 강사 레드라인 5를 기능보다 앞에 두었습니다. 책 속 교습소와 학생, 학부모와 숫자는 모두 가상이고, 문항은 모두 이 책을 위해 새로 만든 자작 문항입니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
