---
title: 법률가를 위한 클로드코드
slug: lawyer
tagline: 판단과 책임은 나의 것, 주변부는 에이전트의 몫 — 39개의 실전 레시피
status: 판매 중
order: 15
cover: /covers/lawyer.jpg
spec: 39개 실전 레시피
recipes: 39
store:
  - name: 교보문고 (전자책 · eBook)
    url: https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000013660133
  - name: 유페이퍼 (전자책 · EPUB)
    url: https://sjandsh05.upaper.kr/content/1225724
downloads:
  - label: 법률가권 데이터셋
    file: /files/lawyer/dataset.zip
    size: 1.0MB
    note: 가상의 새빛시 1인 사무소 '도하진 법률사무소'의 자료. 사건기록(박정우 대 최민석 대여금 사건 기록 59쪽·뒤죽박죽 받은 기록 16파일)·조사(연습용 가상 판례 6건)·서면·계약·상담·직역(등기·회생·임금·노동위원회·행정심판)·운영 7개 폴더 85파일과 정답지 README. 기록 사이 모순·인용 오류·계산 오류·몰래 바뀐 조항·기한 오산·장부 합계 누락·광고 규정 위반 문구 같은 일부러 심어 둔 함정 포함, 인물·법원·사건번호·판례·금액까지 전부 가상인 데이터
  - label: 클로드코드 세팅 가이드 (법률가권)
    file: /files/lawyer/setup-guide.md
    size: 1.9MB
    note: 클로드코드에게 읽혀 그대로 실행시키는 세팅 문서 (책 3-5장, 워드·엑셀·파워포인트·한글·PDF 문서 MCP 포함 — 공용 v14 원문 전체 + 책 독자 부록(진행 모드 선택·맞춤 인터뷰·문서 스킬·첫 대화 연습·사용설명서))
  - label: 프롬프트 치트시트 (PDF)
    file: /files/lawyer/cheatsheet.pdf
    size: 429KB
    note: 책의 복붙 프롬프트 39개 레시피분을 한자리에 (부록 A)
updated: "2026-10-02"
---

9월 마지막 금요일 오후 여섯 시, 직원 없이 혼자 사무소를 꾸리는 개업 4년 차 변호사 도하진의 마지막 상담이 끝납니다. 책상 위에는 2주 뒤 변론기일이 잡힌 대여금 사건의 기록 600여 쪽이 의뢰인이 보낸 순서 그대로 쌓여 있습니다. 파일 이름을 날짜순으로 바꾸고, 쪽수를 적으며 사건 경과를 옮기고, 증거목록의 호증 번호를 기록과 한 줄씩 대조하고, 청구금액과 지연이자를 계산기로 두 번 다시 셉니다. 자정에 불을 끄며 하진은 깨닫습니다. **여섯 시간 가운데 판단한 시간은 한 시간이 채 되지 않았습니다.** 나머지는 전부 정리였습니다.

이 책은 그 정리하는 시간을 덜어 내는 법을 다룹니다. 내 컴퓨터 안의 사건 기록과 판례, 서면 초안과 계약서, 상담 메모와 사건목록, 수임장부를 AI 에이전트 **클로드코드**가 직접 읽고, 기록 색인, 쪽수 출처가 달린 사실관계 타임라인, 인용 대조표, 금액 검산표, 조항별 위험 검토표, 기일·기한 달력을 파일로 만들어 주는 **나만의 실무 비서**를 들이는 것입니다. 대신 선은 처음부터 분명히 긋습니다. 판단과 책임은 나의 것, 주변부는 에이전트의 몫. 서명·제출·발송, 이 세 개의 버튼은 이 책 어디에서도 비서가 누르지 않습니다. 준비는 비서가, 버튼은 사람이.

<section class="book-toc" aria-labelledby="book-toc-title">
  <h3 id="book-toc-title">전체 목차</h3>
  <p class="book-toc-guide">각 부를 누르면 세부 목차를 확인할 수 있습니다.</p>
  <div class="book-toc-groups">
    <details class="book-toc-group">
      <summary><span class="book-toc-part">1부</span><span class="book-toc-name">판단할 시간보다 정리할 시간이 많다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>1-1 금요일 밤의 기록 더미</li>
        <li>1-2 챗봇과 에이전트는 다르다</li>
        <li>1-3 판단과 책임은 나의 것, 주변부는 에이전트의 몫</li>
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
        <li>2-5 안전 수칙과 법률가 레드라인 5</li>
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
      <summary><span class="book-toc-part">4부</span><span class="book-toc-name">사건 기록 다루기</span></summary>
      <ul class="book-toc-list" role="list">
        <li>4-1 의뢰인 자료 익명화 파이프라인</li>
        <li>4-2 사건 기록 폴더 정리</li>
        <li>4-3 기록 통독과 쟁점 요약</li>
        <li>4-4 사실관계 타임라인, 쪽수 출처까지</li>
        <li>4-5 증거 목록·서증 정리</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">5부</span><span class="book-toc-name">판례·법령 조사와 검증</span></summary>
      <ul class="book-toc-list" role="list">
        <li>5-1 법령·조문 조사와 기준일 확인</li>
        <li>5-2 판례 조사·정리표</li>
        <li>5-3 법리 흐름 정리</li>
        <li>5-4 인용 검증기</li>
        <li>5-5 리서치 메모</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">6부</span><span class="book-toc-name">서면 작성</span></summary>
      <ul class="book-toc-list" role="list">
        <li>6-1 내용증명·통지서 초안</li>
        <li>6-2 소장 초안</li>
        <li>6-3 상대 서면 분석·대응표</li>
        <li>6-4 청구금액·지연이자 계산 검산</li>
        <li>6-5 준비서면 초안</li>
        <li>6-6 서면 제출 전 관문</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">7부</span><span class="book-toc-name">계약서 작성·검토</span></summary>
      <ul class="book-toc-list" role="list">
        <li>7-1 계약서 초안 만들기</li>
        <li>7-2 조항별 위험 검토표</li>
        <li>7-3 두 버전 비교, 몰래 바뀐 곳 찾기</li>
        <li>7-4 조항 라이브러리</li>
        <li>7-5 계약서 묶음 일괄 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">8부</span><span class="book-toc-name">의뢰인 소통</span></summary>
      <ul class="book-toc-list" role="list">
        <li>8-1 상담 준비 패키지</li>
        <li>8-2 상담 기록·수임 문서 세트</li>
        <li>8-3 쉬운 말 설명 문서</li>
        <li>8-4 사건 경과 보고서</li>
        <li>8-5 문의 메일·답장 초안</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">9부</span><span class="book-toc-name">직역 특화 실무</span></summary>
      <ul class="book-toc-list" role="list">
        <li>9-1 등기 신청 서류 준비·검산</li>
        <li>9-2 회생·파산 서류 대량 정리</li>
        <li>9-3 임금·퇴직금 계산 검산</li>
        <li>9-4 노동위원회 서면·취업규칙 검토</li>
        <li>9-5 행정심판·인허가 서류</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">10부</span><span class="book-toc-name">사무소 운영</span></summary>
      <ul class="book-toc-list" role="list">
        <li>10-1 기일·기한 관리 달력</li>
        <li>10-2 수임·매출 장부</li>
        <li>10-3 세무 신고 준비</li>
        <li>10-4 사무소 서식 자산화</li>
        <li>10-5 사무소 알리기, 광고 규정 자가 점검</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">11부</span><span class="book-toc-name">한 번 만들어, 계속 재사용</span></summary>
      <ul class="book-toc-list" role="list">
        <li>11-1 나만의 법률 비서, 스킬로 만들기</li>
        <li>11-2 예약으로 기일·기한 브리핑 받기</li>
        <li>11-3 나만의 지연이자 계산기 만들기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">마무리</span><span class="book-toc-name">주변부는 끝났고, 판단이 남았다</span></summary>
      <ul class="book-toc-list" role="list">
        <li>주변부는 끝났고, 판단이 남았다</li>
        <li>스스로 3칸 채우기</li>
      </ul>
    </details>
    <details class="book-toc-group">
      <summary><span class="book-toc-part">부록</span><span class="book-toc-name">치트시트·FAQ·용어집·체크리스트</span></summary>
      <ul class="book-toc-list" role="list">
        <li>부록 A. 프롬프트 치트시트</li>
        <li>부록 B. 자주 묻는 질문</li>
        <li>부록 C. 용어집</li>
        <li>부록 D. 비밀유지·인용 검증·검산 체크리스트</li>
        <li>부록 E. 법령·제도 요약과 변동 주의표</li>
        <li>부록 F. 예제 데이터셋 안내</li>
        <li>부록 G. 색인</li>
      </ul>
    </details>
  </div>
</section>

모든 레시피는 가상의 1인 사무소 **도하진 법률사무소**와 이웃 법무사·노무사·행정사가 함께하는 '새빛 실무연구회'의 자료로 실제 실행해 확인한 결과만 실었고, 같은 데이터셋으로 독자가 그대로 재현할 수 있습니다. 레시피마다 변호사·법무사·노무사·행정사 가운데 누구에게 특히 유용한지, 입력하면 안 되는 자료나 반드시 원문과 대조할 곳이 있는지 배지로 표시했으며, 지연이자·퇴직금·기한처럼 틀리면 곤란한 숫자는 엑셀과 파이썬으로 두 번 계산해 맞춰 봅니다. 판례·법령 인용은 원문과 대조하기 전까지 쓰지 않기, 의뢰인 비밀을 원문 그대로 넣지 않기, 법률 판단과 수임 판단의 최종 책임은 자격사 본인에게 두기, 소비자에게 AI를 직접 연결하는 광고와 상담 서비스를 만들지 않기, 기한·금액·사건번호는 AI 혼자 계산하게 두지 않기. 법률가 레드라인 5를 기능보다 앞에 두었습니다. 책 속 판례는 모두 연습용 가상 판례입니다. 그리고 어디에서든 같은 문장이 관통합니다.

**해결은 에이전트가, 정의는 우리가.**
