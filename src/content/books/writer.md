---
title: 작가를 위한 클로드코드
slug: writer
tagline: 쓰는 시간을 지켜주는, 나만의 AI 집필 비서 — 41개의 실전 레시피
status: 판매 중
order: 6
cover: /covers/writer.jpg
spec: 41개 실전 레시피
recipes: 41
store:
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225401
downloads:
  - label: 작가권 데이터셋
    file: /files/writer/dataset.zip
    size: 343KB
    note: 가상 웹소설 『잿빛 탑의 사서』 30화와 설정집 씨앗, 에세이 『골목의 온도』 원고·취재 메모·인터뷰 녹취, 정산서 3종(xlsx)·출판 계약서(docx)·공모전 요강(PDF), 대청소 연습용 어질러진 작업실 28파일 등 70파일. 일부러 심어 둔 설정·사실·계산 오류와 정답지 포함, 책의 예시를 100% 재현하는 가상 작가 데이터
  - label: 클로드코드 세팅 가이드 (작가권)
    file: /files/writer/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/writer/cheatsheet.pdf
    size: 458KB
    note: 책의 복붙 프롬프트 41개 레시피분을 연간 작가 캘린더 순서로 한자리에 (부록 A)
updated: "2026-09-23"
---

수요일 밤 열한 시, 내일 오후 다섯 시는 연재 31화 마감. 필명 단여울의 하루를 시간의 눈으로 해부하면, 문장을 쓴 시간은 세 시간인데 호칭을 확인하러 예전 회차를 뒤지고, 자료를 검색하고, '진짜_최종' 파일과 씨름하고, 정산서를 검산한 시간이 그보다 깁니다. **작가의 하루는 늘 문장 밖에 먹히고 있었습니다.**

이 책은 그 문장 밖의 시간을 AI 에이전트 **클로드코드**에게 통째로 맡기는 법을 다룹니다. 30화 전체를 읽고 설정 모순을 잡아내고, 인물 카드와 관계도를 만들고, 오탈자·습관어·표기를 일괄 점검하고, 출간기획서와 투고 서식을 파일로 만들고, 정산서를 검산하는 **나만의 집필 비서**를 들이는 것입니다. 대필 책이 아닙니다. 문장은 작가의 것, 나머지는 에이전트의 몫. 공모전 AI 조항·저작권·미공개 원고 보안이라는 작가 레드라인 안에서, 쓰는 시간을 지켜 줍니다.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">마감은 문장 밖에서 온다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 마감 전날의 시간 해부</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 문장은 작가의 것, 나머지는 에이전트의 몫</li>
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
        <li>2-5 안전 수칙과 작가 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">내 원고 작업실</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 '진짜_최종.hwp' 대청소</li>
        <li>4-2 백업 체계 만들기</li>
        <li>4-3 버전 관리 입문</li>
        <li>4-4 아이디어 메모함 통합</li>
        <li>4-5 집필 일지·자수 통계</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">자료조사·취재</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 배경·고증 조사</li>
        <li>5-2 자료 스크랩 서재화</li>
        <li>5-3 전문 지식 과외</li>
        <li>5-4 인터뷰·답사 기록 정리</li>
        <li>5-5 사실 검증·팩트체크</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">세계관·설정 관리</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 설정집(스토리 바이블) 구축</li>
        <li>6-2 인물 카드·관계도</li>
        <li>6-3 시간선·나이 검산</li>
        <li>6-4 설정 오류·일관성 검사</li>
        <li>6-5 시리즈·장편 전권 일괄 검사</li>
        <li>6-6 설정집 최신화 습관</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">집필 동반자</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 시놉시스·플롯 구조 설계</li>
        <li>7-2 아이디어 벽치기</li>
        <li>7-3 막힌 장면 진단</li>
        <li>7-4 내 문체 프로필 만들기</li>
        <li>7-5 인물 인터뷰·독자 리허설</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">퇴고·교정</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 셀프 합평 리포트</li>
        <li>8-2 오탈자·맞춤법 일괄 점검</li>
        <li>8-3 비문·중복 표현·습관어 사냥</li>
        <li>8-4 호칭·명칭·표기 통일</li>
        <li>8-5 퇴고 전후 비교(redline)</li>
        <li>8-6 분량 조정·회차 분할</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">투고·출간</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 출간기획서·시놉시스 패키지</li>
        <li>9-2 투고할 출판사 조사·맞춤 리스트</li>
        <li>9-3 투고 메일·표준 원고 서식</li>
        <li>9-4 공모전 요강 분석·응모 체크리스트</li>
        <li>9-5 출판 계약서 읽기 보조</li>
        <li>9-6 전자책·독립출판 준비</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">연재·작가 살림</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 연재 캘린더·비축분 관리</li>
        <li>10-2 독자 반응·댓글 정리</li>
        <li>10-3 정산서 정리·수입 장부</li>
        <li>10-4 종합소득세 준비</li>
        <li>10-5 내 책 알리기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 검사기, 스킬로 만들기</li>
        <li>11-2 예약으로 처리하기</li>
        <li>11-3 나만의 집필 도구 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 겪는 문제 FAQ</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 원고 보안·백업·검증 체크리스트</li>
        <li>부록 E. 작가 레드라인 요약 + 격변 주의표</li>
        <li>부록 F. 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상 작가 두 사람의 **데이터셋**(웹소설 30화·에세이 원고·정산서·계약서)으로 실제 실행해 확인한 결과만 실었고, 41개 레시피마다 실제 결과물 화면을 그대로 담았습니다. 같은 데이터셋으로 독자가 100% 재현할 수 있습니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
