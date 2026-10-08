---
title: 대학생을 위한 클로드코드
slug: university-student
tagline: 튜터로는 마음껏, 제출물은 내 손으로 — 39개의 실전 레시피
status: 판매 중
order: 22
cover: /covers/university-student.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1226310
downloads:
  - label: 대학생권 데이터셋
    file: /files/university-student/dataset.zip
    size: 378KB
    note: 가상의 라온시 한울대학교 경제학부 2학년 서하늘의 2026년 2학기 자료(여섯 과목 16학점, 학교 앞 카페 아르바이트, 「데이터로 보는 도시」 팀 프로젝트). 공통·강의·레포트·팀플·시험·학사·생활·윤리 8개 폴더 85파일(학사일정과 공휴일·교내 생성형 AI 가이드라인, 여섯 과목 강의계획서와 경제사 일정만 옮긴 메모, 미시 5주차 녹취와 내 필기, 연습용 가상 논문, 계량 과제와 내 풀이, 퀴즈 결과와 오답노트, 기말 레포트 안내문과 채점기준표, 자료 목록 초안과 도서관 소장 목록, 개요·참고문헌 초안, 청년 주거 통계와 그래프 초안, 레포트 최종본, 팀원 가능 시간표와 회의 녹취, 팀원 원고 네 편과 중간발표 초안·대본·기여 기록, 시험 일정·범위 변경 공지와 미시 공개 기출, 계량 요약노트·연습문제·모의고사 답, 졸업요건과 성적표·평점 규정, 다음 학기 개설 강좌, 수강철회 규정과 중간 성적, 계량 성적 산출 기준과 공개 점수, 장학 공고 네 편, 9월 카드·계좌 내역, 근무 기록과 급여명세, 교수님께 보낼 메일 메모, 대외활동 메모, AI 사용 기록과 고지문 초안, 인용 점검용 초안과 원문 세 편, AI 설명 모음과 교재 발췌, 소명 요청과 파일 버전 기록 등)과 정답지 README. 공휴일에 걸린 퀴즈·받아 적기가 틀린 녹취·초록과 본문이 다른 숫자·존재하지 않는 참고문헌·결론에서 처음 나오는 주장·단위가 섞이고 한 해가 빠진 통계와 세로축이 부푼 그래프·시험 주간에 걸린 팀 약속·제한 시간을 넘는 발표 대본·공개되지 않은 경로의 기출·틀린 공식이 적힌 요약노트·두 번 센 학점·선수과목이 빠진 수강 계획·공개 점수에서 빠진 과제·이미 지난 장학 마감·두 번 기록된 거래·빠진 주휴수당·기록에서 빠진 AI 사용·따옴표 없이 옮긴 문장·그럴듯하지만 틀린 AI 설명 같은 일부러 심어 둔 함정 포함, 인물·학교·학번·이메일·전화번호·주소·장학재단·논문·학술지·통계까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (대학생권)
    file: /files/university-student/setup-guide.md
    size: 2.0MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함. 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/university-student/cheatsheet.pdf
    size: 445KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-08"
---

2026년 10월 12일 월요일 새벽 한 시, 라온시 한울대 근처 원룸에서 경제학부 2학년 서하늘은 아직 노트북 앞에 앉아 있습니다. 이번 학기에는 여섯 과목 16학점을 듣고, 학교 앞 카페에서 일주일에 16~18시간 아르바이트를 합니다. 오늘부터 7주차이고, 다음 주는 중간고사입니다. 어제 하루를 시각별로 적어 보면 오전 아홉 시부터 여섯 시간 대타 근무를 했고, 오후에는 읽지 않은 메시지가 87개 쌓인 팀플 단톡방을 열었고, 계량경제학 과제 안내문을 메일함 깊은 곳에서 20분 만에 찾아냈습니다. 저녁에는 장학금 공고 두 개를 성적표와 하나씩 대조했고, 밤에는 강의계획서와 LMS 공지와 교수님의 말로 흩어진 중간고사 범위를 모았습니다. 메모장의 "이번 주 할 일"은 한 시간째 세 줄입니다. **대학생의 한 주는 강의를 듣고 개념을 붙잡는 배우는 시간과, 공지를 찾고 날짜를 옮겨 적고 이 파일과 저 화면을 대조하는 찾아 헤매는 시간으로 나뉩니다. 어제 하늘이 실제로 공부한 시간은 거의 없었습니다.**

이 책은 그 찾아 헤매는 시간을 덜어 내고 배우는 시간을 돌려주는 법을 다룹니다. 강의계획서와 필기, 과제 안내문과 채점기준표, 성적표와 근무 기록을 AI 에이전트 **클로드코드**가 직접 읽고, 학기 지도, 복습 노트, 제출 체크리스트, 참고문헌 실재 확인표, 팀플 역산표와 회의록, D-day 공부 계획, 졸업 요건 점검표, 평점 시뮬레이션, 장학 자격 대조표, AI 사용 고지문 대조표를 파일로 만들어 주는 **나만의 공부 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 과제 제출, 메일 발송, 수강신청과 철회, 성적 이의 신청, 팀 단톡방 게시. 이 다섯 개의 버튼은 언제나 내가 누르고, 시험 답안과 레포트 본문 문장도 비서가 만들지 않습니다. 과제의 목적은 결과물이 아니라 그것을 만들며 내 머리에 남는 것이기 때문입니다. 비서는 많은 것을 덜어 줄 수 있지만, 대신 배워 줄 수는 없습니다. 튜터로는 마음껏, 제출물은 내 손으로.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">배우는 시간보다 찾아 헤매는 시간이 많다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 새벽 한 시의 과제 목록</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 대신 배워 줄 수는 없다</li>
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
        <li>2-5 안전 수칙과 대학생 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">강의·전공 공부</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 강의계획서로 학기 지도 만들기</li>
        <li>4-2 강의 녹취·필기를 복습 노트로</li>
        <li>4-3 논문·교재 읽기 요약과 개념 지도</li>
        <li>4-4 문제풀이 과제, 답 대신 힌트로</li>
        <li>4-5 개념 퀴즈와 오답노트</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">레포트·글쓰기</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 과제 안내문 해부와 채점기준 체크리스트</li>
        <li>5-2 자료 목록과 참고문헌 실재 확인</li>
        <li>5-3 개요 설계와 논증 점검</li>
        <li>5-4 인용·참고문헌 형식 정리</li>
        <li>5-5 데이터로 만드는 표·그래프</li>
        <li>5-6 제출 전 최종 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">팀 프로젝트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 역할·일정 역산표</li>
        <li>6-2 회의록과 할 일 추적</li>
        <li>6-3 팀원 자료 합치기</li>
        <li>6-4 발표 자료와 대본</li>
        <li>6-5 기여 기록과 동료평가 준비</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">시험 준비</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 시험 범위와 D-day 공부 계획</li>
        <li>7-2 공개 기출·연습문제 유형 분석</li>
        <li>7-3 요약 노트와 암기 카드</li>
        <li>7-4 모의고사 만들기와 채점</li>
        <li>7-5 시험 후 오답 복기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">학점·수강 관리</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 졸업 요건 점검표</li>
        <li>8-2 평점 계산과 목표 학점 시뮬레이션</li>
        <li>8-3 수강신청 시간표 짜기</li>
        <li>8-4 재수강·수강철회 판단표</li>
        <li>8-5 성적 확인과 이의 신청 준비</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">대학 생활·돈</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 장학금 공고 정리와 자격 대조</li>
        <li>9-2 한 달 가계부와 생활비 예산</li>
        <li>9-3 아르바이트 근무시간·급여 검산</li>
        <li>9-4 교수님·학과 사무실 메일 쓰기</li>
        <li>9-5 대외활동·경험 기록 보관함</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">학업 윤리·AI 사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 과목별 AI 사용 규정 정리표</li>
        <li>10-2 AI 사용 내역 기록과 고지문</li>
        <li>10-3 인용 누락·짜깁기 자가 점검</li>
        <li>10-4 AI 설명의 사실 검증</li>
        <li>10-5 오해를 받았을 때, 작성 과정 기록 정리</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 공부 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 아침 학기 브리핑 받기</li>
        <li>11-3 나만의 학점 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">정리는 끝났고, 배움이 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>정리는 끝났고, 배움이 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 제출 전·AI 사용·검산 체크리스트</li>
        <li>부록 E. 한 학기 달력과 학사 제도 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 한울대학교와 그 자료로 실제로 돌려 본 결과만 실었고, 평점과 장학 자격과 아르바이트 급여는 파이썬과 엑셀로 따로 계산해 일치할 때만 썼으며, 같은 데이터셋으로 독자가 그대로 따라 할 수 있습니다. 경제학부 학생만을 위한 책은 아닙니다. 기계공학과 윤재민과 국어국문학과 이수아의 곁상자가 같은 레시피를 이공계의 실험 보고서와 문제풀이, 인문·사회계의 논문과 원전 읽기에 어떻게 바꾸어 쓰면 되는지 짚어 주고, 레시피마다 과목 AI 규정과 학칙을 먼저 확인해야 하는지, 참고문헌과 통계를 원문으로 확인해야 하는지, 팀원과 설문 응답자의 정보를 다루는지, 어느 계열에 특히 쓸모가 큰지를 배지로 알려 드립니다. 한 번 만든 과목별 AI 규정표와 학기 지도는 다음 레시피의 재료가 되고, 반복하는 일은 /복습노트, /제출전점검, /AI사용기록 같은 스킬로 묶여 내 영혼폴더에 쌓입니다. 대필시키지 않기, 과목 규정과 학칙을 먼저 보고 사용했으면 밝히기, 출처는 내 눈으로 확인하기, 남의 정보와 저작물을 지키기, 학점·장학·학사 숫자는 두 번 계산하고 공식으로 확인하기. 대학생 레드라인 5를 기능보다 앞에 두었습니다. AI 탐지 도구를 피하는 법은 이 책 어디에도 없습니다. 피할 것은 탐지기가 아니라 부정행위 자체이기 때문입니다. 책 속 학교와 학생, 교수님과 숫자는 모두 가상이고, 학칙과 장학 규정도 연습용 가상 규정이라 내 학교의 기준은 그해 원문으로 다시 확인하도록 표시했습니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
