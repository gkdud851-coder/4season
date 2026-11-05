import React, { useState, useEffect } from 'react';
import {
  Phone,
  Calendar,
  MapPin,
  Clock,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Maximize2,
  X,
  Car,
  Utensils,
  Music,
  BadgePercent,
  Type,
  Navigation,
  MessageSquare,
  Send,
  Activity,
  Coffee,
  Check,
  HelpCircle,
  FileText
} from 'lucide-react';

interface DailyRoutine {
  time: string;
  title: string;
  desc: string;
  tag: string;
  color: string;
}

const dailyRoutines: DailyRoutine[] = [
  {
    time: '08:30 ~ 09:30',
    title: '안심 송영 (댁 앞 모시기)',
    desc: '전문 송영 기사님과 요양보호사 선생님이 댁 앞까지 직접 찾아뵙고 편안히 모셔옵니다.',
    tag: '안심 송영',
    color: 'bg-[#2E8B57]/15 text-[#1E6B3F]'
  },
  {
    time: '09:30 ~ 10:30',
    title: '건강 활력 체크 & 아침 체조',
    desc: '혈압, 혈당, 맥박, 체온을 꼼꼼히 측정하고 굳은 관절을 부드럽게 깨우는 건강 체조를 진행합니다.',
    tag: '건강 케어',
    color: 'bg-[#DB6B88]/15 text-[#C14D6B]'
  },
  {
    time: '10:30 ~ 12:00',
    title: '두뇌 튼튼 인지·재활 프로그램',
    desc: '어린이집 10년 노하우를 담은 맞춤형 미술, 음악, 회상 놀이로 치매 예방과 뇌 기능을 자극합니다.',
    tag: '두뇌 활력',
    color: 'bg-[#C67D15]/15 text-[#A06008]'
  },
  {
    time: '12:00 ~ 13:30',
    title: '정갈한 영양 점심 & 편안한 낮잠',
    desc: '전문 영양사가 설계한 제철 식재료로 조리한 따뜻한 밥상과 식후 개별 휴식 공간에서의 달콤한 낮잠.',
    tag: '영양 식단',
    color: 'bg-[#4A82B0]/15 text-[#2B608A]'
  },
  {
    time: '13:30 ~ 15:00',
    title: '편백 온열 족욕 & 두타매트 힐링',
    desc: '어르신들이 가장 사랑하시는 편백나무 온열 족욕과 온몸의 피로를 풀어드리는 두타매트 안마 시간.',
    tag: '물리 힐링',
    color: 'bg-[#2E8B57]/15 text-[#1E6B3F]'
  },
  {
    time: '15:00 ~ 16:30',
    title: '신체 레크리에이션 & 오후 제철 간식',
    desc: '또래 친구들과 웃음꽃 피는 신체 게임 후 정성껏 준비한 신선한 과일과 제철 영양 간식을 대접합니다.',
    tag: '친교·간식',
    color: 'bg-[#DB6B88]/15 text-[#C14D6B]'
  },
  {
    time: '16:30 ~ 17:30',
    title: '안전 귀가 송영 & 자녀 안심 알림장',
    desc: '댁 안방까지 안전하게 모셔다드린 후, 자녀분께 오늘 어르신의 환한 사진과 하루 일기를 전송합니다.',
    tag: '안심 귀가',
    color: 'bg-[#163829]/15 text-[#163829]'
  }
];

interface FacilityPhoto {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const facilityPhotos: FacilityPhoto[] = [
  {
    id: 'hall',
    src: '/images/실내사진.jpg',
    title: '메인 홀 및 생활공간',
    category: '실내전경',
    description: '채광이 풍부하고 탁 트인 넓고 쾌적한 어르신들의 주 활동 공간입니다.'
  },
  {
    id: 'rest',
    src: '/images/휴게공간.jpg',
    title: '소파 & 휴게 쉼터',
    category: '휴게시설',
    description: '편안하게 담소를 나누고 안락하게 쉴 수 있는 힐링 휴게 공간입니다.'
  },
  {
    id: 'exercise',
    src: '/images/운동기구.jpg',
    title: '슬링 & 재활 운동기구',
    category: '운동·재활',
    description: '어르신들의 근력 유지와 관절 유연성을 돕는 안전한 운동 기구 공간입니다.'
  },
  {
    id: 'cognition',
    src: '/images/인지존.jpg',
    title: '두뇌 자극 인지 프로그램존',
    category: '프로그램',
    description: '집중력과 기억력 향상을 위한 다양한 인지 교구 및 미술 활동 공간입니다.'
  },
  {
    id: 'footbath',
    src: '/images/족욕.jpg',
    title: '편백 온열 족욕실',
    category: '편의시설',
    description: '혈액순환과 피로 회복을 돕는 따뜻하고 향긋한 족욕 힐링 공간입니다.'
  },
  {
    id: 'dutamat',
    src: '/images/두타매트사진.jpg',
    title: '두타매트 마사지 힐링존',
    category: '건강관리',
    description: '어르신들께 가장 인기 많은 온열 두타매트로 뭉친 근육을 시원하게 풀어드립니다.'
  },
  {
    id: 'kitchen',
    src: '/images/조리실.jpg',
    title: '청결 영양 조리실',
    category: '위생·식단',
    description: '매일 영양사가 구성한 균형 잡힌 식단으로 정갈하게 조리하는 위생 조리실입니다.'
  },
  {
    id: 'beauty',
    src: '/images/이미용.jpg',
    title: '어르신 전용 이미용실',
    category: '위생·케어',
    description: '어르신들의 단정하고 깔끔한 헤어 케어를 돕는 전용 이미용 공간입니다.'
  },
  {
    id: 'toilet',
    src: '/images/화장실.jpg',
    title: '낙상 방지 안심 화장실',
    category: '안전시설',
    description: '어르신의 안전을 위해 촘촘한 안전 손잡이와 미끄럼 방지가 완비되어 있습니다.'
  }
];

interface BlogStory {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  summary: string;
  url: string;
  thumbnail: string;
  fallbackImage: string;
}

const blogStories: BlogStory[] = [
  {
    id: 'story-1',
    tag: '충청도 어르신 속정',
    tagColor: 'text-[#C14D6B] bg-[#DB6B88]/15',
    title: '“좋으면 좋다고 말씀해 주셔도 되는데유~”',
    subtitle: '무뚝뚝해 보여도 속정 깊은 충청도 어르신 이야기',
    summary: '겉으론 덤덤해 보이셔도 슬쩍 쥐여주시는 따스한 손과 은근한 눈인사에 온 마음이 사르르 녹아내립니다.',
    url: 'https://blog.naver.com/ochang4season/224460139967',
    thumbnail: 'https://blogthumb.pstatic.net/MjAyNjEwMzFfOTUg/MDAxNzkzNDI1NzA3MDkz.SYOwDkvkQrsWqc4S17HTziivz9JN2-soziJUCd1cpbYg.rg5nErcsp84S6y_Q7RQgqYL7e06CzihvVsH0YSBDkHUg.JPEG/KakaoTalk_20261030_151203952_17.jpg?type=w2',
    fallbackImage: '/images/견학사진.jpg'
  },
  {
    id: 'story-2',
    tag: '어르신 마음 케어',
    tagColor: 'text-[#1E6B3F] bg-[#2E8B57]/15',
    title: '“어르신, 고맙지만 제게 미안하지는 않으셨으면 좋겠습니다”',
    subtitle: '작은 도움에도 죄송해하시는 부모님들께 드리는 진심',
    summary: '“내가 귀찮게 해서 미안혀...” 작은 부탁에도 미안해하시는 부모님, 사계절에서는 당연한 자식의 몫입니다.',
    url: 'https://blog.naver.com/ochang4season/224455027265',
    thumbnail: 'https://blogthumb.pstatic.net/MjAyNjEwMjdfNTIg/MDAxNzkzMDU5NTA3ODM2.fLZIpfqYVJqRPjssOVNkl3eVdyN30ahBO8d9GP-wzVEg.Nn_DJfonnk8dlFNvYUuPwFNjaKgilMFJ-Me1nIvgjHMg.JPEG/KakaoTalk_20261026_143329059_07.jpg?type=w2',
    fallbackImage: '/images/족욕.jpg'
  },
  {
    id: 'story-3',
    tag: '엄마의 마음 알림장',
    tagColor: 'text-[#A06008] bg-[#C67D15]/15',
    title: '“내 아이 알림장을 읽다가, 누군가의 부모님 하루를 전하기로 했습니다”',
    subtitle: '어린이집 교사 10년의 엄마가 보호자님께 일기를 전하는 이유',
    summary: '멀리 계셔 늘 애타는 자녀분을 위해, 오늘 부모님이 얼마나 환하게 웃으셨는지 사진과 글로 전해드립니다.',
    url: 'https://blog.naver.com/ochang4season/224450013750',
    thumbnail: 'https://blogthumb.pstatic.net/MjAyNjEwMjJfMTM5/MDAxNzkyNjM5NTQ4NDY3.82Pe_RurFxq-yA8rh8eQosWUVoKw_aYfKIEU6eOe7Nsg.casXQrlxLvj09fTZZ_kZ6rK-1wvfPgzsrTLzWmxMqcgg.JPEG/KakaoTalk_20261022_122152357_01.jpg?type=w2',
    fallbackImage: '/images/대표님사진.jpg'
  },
  {
    id: 'story-4',
    tag: '송영길 따스한 온기',
    tagColor: 'text-[#2B608A] bg-[#4A82B0]/15',
    title: '“송영길 차 안에서 주머니 속 불쑥 꺼내주신 알사탕과 모과향”',
    subtitle: '아침마다 어르신 모시러 가는 차 안이 유독 향긋한 까닭',
    summary: '차창 밖 가을 바람 사이로 “선생 주려고 챙겨뒀어” 하시며 건네신 알사탕 하나, 평생 잊지 못할 온기입니다.',
    url: 'https://blog.naver.com/ochang4season/224441621870',
    thumbnail: 'https://blogthumb.pstatic.net/MjAyNjEwMTRfMjcw/MDAxNzkxOTY2MjAzMzk2.jbRMe4zIR__ayM8nfDFmJismRm16LUexPBO5GuEQFDMg.wRZDV0eSho6N08Ak82X_DbWru-gMp_1rtgEDxfC4JU4g.PNG/image.png?type=w2',
    fallbackImage: '/images/견학사진2.jpg'
  }
];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<FacilityPhoto | null>(null);
  const [isLargeText, setIsLargeText] = useState<boolean>(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState<boolean>(false);
  const [consultName, setConsultName] = useState<string>('');
  const [consultPhone, setConsultPhone] = useState<string>('');
  const [consultService, setConsultService] = useState<string>('무료 2~3시간 체험 견학');
  const [elderStatus, setElderStatus] = useState<string>('아직 등급 없음 (무료 대행 희망)');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isLargeText) {
      document.body.classList.add('text-large');
    } else {
      document.body.classList.remove('text-large');
    }
  }, [isLargeText]);

  return (
    <div className="min-h-screen relative bg-stone-900 font-sans-kr selection:bg-[#23533D]/20 selection:text-[#163829] flex justify-center">
      {/* ── 데스크톱 배경: 센터 실내사진 은은하게 배치 ── */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat filter blur-[4px] scale-105 opacity-35"
        style={{ backgroundImage: "url('/images/실내사진.jpg')" }}
        aria-hidden="true"
      />
      {/* ── 배경 앰비언트 오버레이 (사계절의 숲과 따스한 감성) ── */}
      <div
        className="fixed inset-0 z-0 bg-gradient-to-b from-[#163829]/75 via-[#1C1917]/70 to-[#163829]/85 pointer-events-none"
        aria-hidden="true"
      />

      {/* ── 배경 사계절 잎새 애니메이션 (시각적 감성) ── */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span className="absolute top-0 left-[8%] text-[#DB6B88]/60 text-lg animate-leaf-1">🌸</span>
        <span className="absolute top-0 left-[32%] text-[#2E8B57]/50 text-base animate-leaf-2">🍃</span>
        <span className="absolute top-0 left-[65%] text-[#C67D15]/60 text-lg animate-leaf-3">🍁</span>
        <span className="absolute top-0 left-[88%] text-[#4A82B0]/45 text-sm animate-leaf-4">❄️</span>
      </div>

      {/* ── 중앙 모바일 프레임 컨테이너 (최대 480px 모바일 화면비율) ── */}
      <div
        className={`relative z-10 w-full max-w-[480px] min-h-screen bg-[#FDFBF7] text-[#1C1917] flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.5)] border-x border-[#E5DFC9] ${
          isLargeText ? 'text-lg' : 'text-[16px]'
        }`}
      >
        {/* ── 맨 상단 히어로 커버 사진 (센터 전경 및 넓은 주차 환경) ── */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-stone-900 border-b border-[#E5DFC9] group">
          <img
            src="/images/센터전경2.jpg"
            alt="사계절 주간보호센터 전경 및 넓은 전용 주차환경"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/센터전경.jpg';
            }}
          />
          {/* 부드러운 하단 비네팅 그라데이션 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          {/* 커버 텍스트 & 안내 뱃지 */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div className="text-white">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#23533D]/90 border border-white/20 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full mb-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-pulse"></span>
                센터 전경 및 주차 환경
              </span>
              <h2 className="font-batang text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
                사계절 주간보호센터
              </h2>
              <p className="text-[11px] sm:text-xs text-white/85 drop-shadow-sm mt-0.5">
                청주 오창 중심 · 단독 건물 & 안심 송영 주차 완비
              </p>
            </div>
          </div>
        </div>

        {/* ── 상단 바 (헤더) ── */}
        <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5DFC9] transition-all">
          <div className="w-full px-4 h-14 sm:h-15 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-1.5 text-[#163829] font-bold text-sm sm:text-base tracking-tight hover:opacity-90 transition-opacity">
              <span className="inline-flex gap-1 shrink-0">
                <i className="w-2 h-2 rounded-full bg-[#DB6B88]" title="봄"></i>
                <i className="w-2 h-2 rounded-full bg-[#2E8B57]" title="여름"></i>
                <i className="w-2 h-2 rounded-full bg-[#C67D15]" title="가을"></i>
                <i className="w-2 h-2 rounded-full bg-[#4A82B0]" title="겨울"></i>
              </span>
              <span className="font-batang">사계절 주간보호센터</span>
            </a>

            <div className="flex items-center gap-2">
              {/* 글자 크기 조절 버튼 */}
              <button
                onClick={() => setIsLargeText(!isLargeText)}
                className={`px-2 py-1 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1 ${
                  isLargeText
                    ? 'bg-[#23533D] text-white border-[#23533D]'
                    : 'bg-white text-[#44403C] border-[#E5DFC9] hover:bg-[#F4F7F3]'
                }`}
                title="글자 크기 크게 보기 / 보통으로 보기"
                aria-label="글자 크기 조절"
              >
                <Type className="w-3 h-3" />
                <span>{isLargeText ? '보통' : '크게'}</span>
              </button>

              {/* 전화 상담 버튼 */}
              <a
                id="top-call-btn"
                href="tel:043-216-4120"
                className="bg-[#23533D] hover:bg-[#163829] active:scale-95 text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-xs transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <Phone className="w-3 h-3 shrink-0" />
                <span>043-216-4120</span>
              </a>
            </div>
          </div>
        </header>

      {/* ── ① 도입부: 대표의 편지 (진짜 정성을 담은 손편지지 디자인) ── */}
      <section className="pt-4 pb-12 px-3 sm:px-4" id="top">
        <div className="w-full text-center">
          
          {/* 상단 은은한 편지 알림 */}
          <div className="inline-flex items-center gap-1.5 text-xs text-[#23533D] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#23533D]"></span>
            사계절 주간보호센터 대표 김혜리가 드리는 글
          </div>

          <h1 className="font-batang text-2xl sm:text-3xl text-[#163829] leading-snug font-bold tracking-tight mb-2">
            인생의 어느 계절도,<br />소중하지 않은 계절은 없습니다
          </h1>
          <p className="text-[#665E55] text-xs sm:text-sm font-medium mb-6">
            청주 오창 · 옥산 · 오송 · 청원구 어르신과 가족보호자님을 위해
          </p>

          {/* ── 진짜 편지지 (Letter Paper) 본체 ── */}
          <div
            id="letter"
            className="text-left bg-[#FAF6ED] border border-[#DDD5BF] shadow-[0_8px_30px_rgba(46,42,36,0.08)] rounded-xl sm:rounded-2xl p-6 sm:p-9 relative overflow-hidden"
          >
            {/* 편지지 상단 클래식 레터헤드 라인 */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E3DBC7]">
              <span className="font-batang text-xs text-[#82786B] tracking-widest">
                LETTER FROM SAEGYEJEOL
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB6B88]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C67D15]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A82B0]"></span>
              </div>
            </div>

            {/* 편지 수신인 */}
            <div className="mb-6 font-batang font-bold text-base sm:text-lg text-[#163829]">
              사랑하는 부모님을 위해 마음을 졸이고 계실 가족보호자님께,
            </div>

            {/* 편지 본문: 핵심 감동을 살린 컴팩트한 편지글 (30초 완독 분량) */}
            <div className="font-batang text-[15px] sm:text-[16px] text-[#2B2621] leading-[2.0] space-y-4">
              <p>
                안녕하세요.<br />
                어린이집 교사로 10년을 지내오다,<br />
                지금은 청주에서 사계절 주간보호센터를 가꾸고 있는<br />
                대표 김혜리입니다.
              </p>

              <p>
                10년 동안 매일 아침 아이들의 작은 손을 잡으며,<br />
                정성 어린 눈길과 따뜻한 돌봄이<br />
                사람의 하루를 얼마나 환하게 바꾸는지 배웠습니다.
              </p>

              {/* 편지지에 나란히 꽂힌 추억의 2컷 사진 (스크롤 부담 최소화) */}
              <div className="grid grid-cols-2 gap-2.5 my-4">
                <div className="bg-white p-2 border border-[#DED7C2] shadow-2xs rounded-xs rotate-[-0.5deg]">
                  <img
                    src="/images/대표님사진.jpg"
                    alt="어린이집 교사 시절의 김혜리 대표"
                    className="w-full aspect-4/3 object-cover rounded-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <p className="text-center mt-1.5 text-[11px] text-[#7A7165] font-sans font-medium">
                    교사 시절의 저
                  </p>
                </div>

                <div className="bg-white p-2 border border-[#DED7C2] shadow-2xs rounded-xs rotate-[0.5deg]">
                  <img
                    src="/images/할머니사진.jpg"
                    alt="할머니와 김혜리 대표"
                    className="w-full aspect-4/3 object-cover rounded-xs"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <p className="text-center mt-1.5 text-[11px] text-[#7A7165] font-sans font-medium">
                    사랑하는 저희 할머니
                  </p>
                </div>
              </div>

              <p>
                그런 제가 어르신들을 모시게 된 것은,<br />
                한집에서 모시던 저희 할머니 때문이었습니다.<br />
                <br />
                경로당 발길이 뜸해지며 점점 말수와 웃음을 잃어가시던 할머니...<br />
                처음엔 <strong className="text-[#9A3412]">"눈에 흙이 들어가도 안 간다"</strong>며 완강히 손사래를 치셨지만,<br />
                설득 끝에 주간보호센터에 다녀오신 뒤 믿기 힘든 기적이 일어났습니다.
              </p>

              <p>
                또래 친구들과 웃고 이야기꽃을 피우며,<br />
                예전의 그 눈부신 생기와 환한 미소를 고스란히 되찾으신 것입니다.
              </p>

              <p>
                그때 가슴 깊이 깨달았습니다.<br />
                <strong>우리 어르신들도 아이들처럼, 진심 어린 온기와 친구가 늘 필요하다는 것을요.</strong>
              </p>

              {/* 편지 중간 사계절 구절 */}
              <div className="my-5 py-3.5 px-3 text-center border-y border-[#DDD3BC] bg-[#F4EFE2]/60 text-[#163829] font-bold text-sm sm:text-base leading-relaxed">
                봄, 여름, 가을, 겨울 —<br />
                인생의 어느 계절도 소중하지 않은 계절은 없습니다.<br />
                <span className="text-[#C14D6B]">봄은 봄답게, </span>
                <span className="text-[#1E6B3F]">여름은 여름답게, </span>
                <span className="text-[#A06008]">가을은 가을답게, </span>
                <span className="text-[#2B608A]">겨울은 겨울답게</span><br />
                어르신의 하루를 가족처럼 정성껏 모시겠습니다.
              </div>

              <p>
                등록하지 않으셔도 정말 괜찮습니다.<br />
                아직 장기요양등급이 없으셔도 괜찮습니다.<br />
                <br />
                혼자 끙끙 앓지 마시고, 동네 친손녀에게 물어보듯<br />
                편안하게 전화 한 통 주시거나 차 한잔하러 놀러 오세요.<br />
                댁 앞까지 모시러 가고, 모셔다드리는 것까지 기쁜 마음으로 돕겠습니다.
              </p>

              <p className="pt-1">
                늘 어르신의 곁에서 따뜻한 온기를 지키겠습니다.<br />
                긴 글 읽어주셔서 참 고맙습니다.
              </p>
            </div>

            {/* 편지 맺음말 및 날짜/서명/붉은 인장 */}
            <div className="mt-9 pt-6 border-t border-[#E3DBC7] flex flex-col sm:flex-row items-end justify-between gap-4">
              <div className="text-xs text-[#8A8174] font-batang self-start sm:self-end">
                사계절의 따스한 볕을 담아,
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs text-[#7A7165] font-batang">사계절 주간보호센터</p>
                  <p className="font-batang font-bold text-lg text-[#163829] tracking-wider">
                    대표 김혜리 올림
                  </p>
                </div>

                {/* 한국 전통 전각 붉은 인장(도장) */}
                <div
                  className="w-11 h-11 border-2 border-[#B91C1C] text-[#B91C1C] rounded-sm flex items-center justify-center font-batang font-bold text-[11px] leading-tight select-none shadow-2xs rotate-[-3deg] bg-[#FAF6ED]"
                  title="사계절 김혜리 인장"
                >
                  <span className="tracking-tighter text-center">
                    김혜리<br />印
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ② 사계절 센터장의 생생 일상 이야기 (네이버 블로그 링크) ── */}
      <section className="bg-[#F8F5EE] py-12 px-4 border-y border-[#E5DFC9]" id="stories">
        <div className="w-full">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#23533D] uppercase mb-2">
              <span className="w-5 h-0.5 bg-[#23533D]"></span>
              사계절의 일상 기록
            </div>

            <div className="flex items-center gap-2 font-batang font-bold text-2xl text-[#163829] mb-1.5">
              <span>📝 사계절 다이어리</span>
            </div>

            <h2 className="font-batang font-bold text-xl text-[#23533D] mb-2 leading-snug">
              우리 어르신들,<br />사계절에서 어떻게 지내실까요?
            </h2>

            <p className="text-[#57534E] text-xs sm:text-sm mb-6 font-medium leading-relaxed">
              김혜리 센터장이 현장에서 직접 보고 느낀 어르신들과의 따뜻하고 솔직한 일상 기록입니다. (제목을 누르시면 네이버 블로그 원문으로 이동합니다)
            </p>

            {/* 블로그 글 카드 목록 */}
            <div className="space-y-4">
              {blogStories.map((story) => (
                <a
                  key={story.id}
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#FAF6ED] hover:bg-white border border-[#E0D7C2] hover:border-[#23533D] rounded-2xl p-4 sm:p-4.5 shadow-2xs hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <div className="flex gap-3.5 items-start">
                    {/* 썸네일 */}
                    <div className="w-[96px] sm:w-[110px] shrink-0 aspect-[4/3] rounded-xl overflow-hidden bg-[#ECE6D7] border border-[#DDD5BF] relative shadow-2xs">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = story.fallbackImage;
                        }}
                      />
                      <span className="absolute bottom-1 right-1 bg-[#03C75A] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-xs shadow-xs">
                        블로그
                      </span>
                    </div>

                    {/* 본문 정보 */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1 ${story.tagColor}`}>
                          {story.tag}
                        </span>

                        <h3 className="font-batang text-[14px] sm:text-[15px] font-bold text-[#163829] group-hover:text-[#23533D] leading-snug line-clamp-2 transition-colors">
                          {story.title}
                        </h3>

                        <p className="text-[11px] sm:text-xs text-[#57534E] leading-relaxed line-clamp-2 mt-1">
                          {story.summary}
                        </p>
                      </div>

                      <div className="mt-2.5 flex items-center justify-between pt-1.5 border-t border-[#EAE3D2]">
                        <span className="text-[10px] text-[#8C8275] font-medium">
                          김혜리 센터장의 글
                        </span>
                        <div className="flex items-center gap-0.5 text-[11px] font-bold text-[#23533D] group-hover:translate-x-0.5 transition-transform">
                          <span>글 읽어보기</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* 공식 블로그 링크 & 견학 안내 */}
            <div className="mt-6 space-y-3">
              <a
                href="https://blog.naver.com/ochang4season"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white hover:bg-[#F4F7F3] border-2 border-[#23533D] rounded-xl flex items-center justify-center gap-2 text-center text-[#23533D] font-bold text-xs sm:text-sm shadow-xs transition-colors active:scale-[0.98]"
              >
                <span className="w-4 h-4 rounded-full bg-[#03C75A] text-white text-[10px] flex items-center justify-center font-bold">
                  N
                </span>
                <span>사계절 공식 블로그에서 더 많은 이야기 보기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="bg-[#23533D]/6 border border-[#23533D]/20 rounded-xl p-3 text-center text-xs text-[#292524] leading-relaxed">
                <p className="font-medium">
                  💡 <strong className="text-[#163829]">어르신 무료 2~3시간 체험 견학</strong>은 언제든 열려있습니다.<br />
                  (송영 차량으로 댁 앞까지 픽업 & 모셔다드립니다)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ③ 실내 사진 및 시설 공간 갤러리 ── */}
      <section className="py-12 px-4" id="photos">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            실내 사진 & 공간 소개
          </div>
          <h2 className="font-batang text-2xl text-[#163829] font-bold leading-snug mb-2">
            어르신들이 머무실<br />사계절의 공간입니다
          </h2>
          <p className="text-[#44403C] text-sm mb-6 font-medium">
            사진으로 먼저 둘러보시고, 견학 오셔서 직접 눈으로 확인해 주세요. (사진 터치 시 크게 보실 수 있습니다)
          </p>

          {/* 사진 그리드: 2열 배치로 스크롤 부담 축소 */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {facilityPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer bg-white rounded-xl border border-[#E5DFC9] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#23533D]/60 active:scale-[0.98] transition-all flex flex-col"
              >
                <div className="aspect-4/3 w-full bg-[#EFEBE1] relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/30 transition-colors" />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/65 text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-1 font-medium backdrop-blur-2xs">
                    <Maximize2 className="w-2.5 h-2.5" /> 확대
                  </span>
                </div>
                <div className="p-2.5 flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-xs sm:text-sm text-[#163829] group-hover:text-[#23533D] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-[#57534E] leading-snug line-clamp-2 mt-1">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ④ 사계절 어르신의 행복한 하루 일과표 (타임라인) ── */}
      <section className="bg-[#FAF7F0] py-12 px-4 border-b border-[#E5DFC9]" id="routine">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            하루 일과 안내
          </div>
          <h2 className="font-batang text-2xl text-[#163829] font-bold leading-snug mb-2">
            아침부터 저녁까지,<br />어르신의 따뜻한 하루
          </h2>
          <p className="text-[#57534E] text-xs sm:text-sm mb-7 font-medium leading-relaxed">
            무료하게 TV만 보시는 것이 아니라, 또래 친구들과 웃고 활동하며 건강을 지키실 수 있도록 체계적으로 구성되어 있습니다.
          </p>

          {/* 일과표 타임라인 리스트 */}
          <div className="relative pl-4 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-3 before:w-0.5 before:bg-[#D9D1BC]">
            {dailyRoutines.map((routine, idx) => (
              <div key={idx} className="relative group">
                {/* 타임라인 원형 닷 */}
                <div className="absolute -left-4 top-1.5 w-4 h-4 rounded-full bg-white border-3 border-[#23533D] shadow-2xs group-hover:scale-125 transition-transform" />

                <div className="bg-white border border-[#E3DCBE] rounded-xl p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-sans font-bold text-xs text-[#23533D] tracking-tight">
                      ⏱ {routine.time}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${routine.color}`}>
                      {routine.tag}
                    </span>
                  </div>

                  <h3 className="font-batang text-sm sm:text-base font-bold text-[#163829] leading-snug mb-1">
                    {routine.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#57534E] leading-relaxed">
                    {routine.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 일과표 하단 안심 메시지 */}
          <div className="mt-7 p-4 bg-white border border-[#DDD5BF] rounded-2xl text-center">
            <p className="text-xs text-[#292524] leading-relaxed font-medium">
              ❤️ <strong className="text-[#163829]">“오늘 우리 엄마 기분은 어떠셨을까?”</strong><br />
              매일 저녁 귀가 시, 보호자 자녀분의 스마트폰으로 어르신의 환한 활동 사진과 안심 일기를 전송해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── ⑤ 개별케어 약속 ── */}
      <section className="bg-[#163829] text-[#F3F1EA] py-14 px-4 text-center" id="care">
        <div className="w-full">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-wider text-[#C67D15] uppercase mb-3">
            <span className="w-5 h-0.5 bg-[#C67D15]"></span>
            사계절의 약속
            <span className="w-5 h-0.5 bg-[#C67D15]"></span>
          </div>

          <h2 className="font-batang text-2xl text-white font-bold leading-snug mb-4">
            어르신 한 분 한 분께,<br />사랑을 가득 부어드리겠습니다
          </h2>

          <p className="text-[#DCE5DD] text-sm mb-6 leading-relaxed">
            저희는 이제 막 문을 연 <strong className="text-white font-bold">새 센터</strong>입니다. 아직 어르신들이 가득하지는 않지만, 그래서 오히려 드릴 수 있는 것이 있습니다.
          </p>

          <div className="font-batang text-base sm:text-lg text-white leading-relaxed my-7 p-5 bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs">
            어르신 한 분 한 분이 센터에 잘 적응해 나가실 수 있도록<br />
            <strong className="text-[#FBBF24] font-bold">세심한 개별케어</strong>를 제공하겠습니다.<br />
            절대 허전하다고 느끼지 않으시도록,<br />
            사랑을 가득 부어드리겠습니다.
          </div>

          <p className="text-[#DCE5DD] text-xs leading-relaxed">
            어린이집에서 아이 하나하나를 살피던 그 마음 그대로, 어르신의 표정 하나, 말씀 한마디를 놓치지 않겠습니다.
          </p>
        </div>
      </section>

      {/* ── ⑥ 이용 비용 & 장기요양등급 무료 대행 ── */}
      <section className="py-12 px-4 bg-[#F8F5EE] border-b border-[#E5DFC9]" id="grade">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            비용 & 등급 안내
          </div>
          <h2 className="font-batang text-2xl text-[#163829] font-bold leading-snug mb-2">
            국가지원 85% ~ 100% 혜택,<br />등급 신청도 무료로 도와드립니다
          </h2>
          <p className="text-[#57534E] text-xs sm:text-sm mb-7 font-medium leading-relaxed">
            “비용이 비싸면 어쩌지?”, “아직 등급이 없는데...” 혼자 고민하지 마세요. 사계절이 친손녀처럼 하나하나 다 챙겨드립니다.
          </p>

          <div className="space-y-4">
            {/* 카드 1: 비용 부담 안심 카드 */}
            <div className="bg-white border border-[#E0D7C2] rounded-2xl p-4.5 sm:p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 text-[#23533D]">
                <BadgePercent className="w-5 h-5 shrink-0" />
                <h3 className="font-batang font-bold text-base text-[#163829]">
                  이용 비용 안내 (국가 지원 85%~100%)
                </h3>
              </div>

              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                노인장기요양보험 등급을 받으시면 국가(건강보험공단)에서 비용의 대부분을 지원합니다.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-[#EAE3D2]">
                <div className="p-2.5 bg-[#FAF7F0] rounded-xl border border-[#E5DFC9]">
                  <span className="text-[11px] text-[#78716C] block">일반 수급자</span>
                  <span className="font-bold text-[#163829] text-sm block mt-0.5">본인부담 15%</span>
                  <span className="text-[10px] text-[#23533D] font-medium block mt-1">하루 약 1만 원대</span>
                </div>
                <div className="p-2.5 bg-[#FAF7F0] rounded-xl border border-[#E5DFC9]">
                  <span className="text-[11px] text-[#78716C] block">감경 대상자</span>
                  <span className="font-bold text-[#163829] text-sm block mt-0.5">본인부담 6~9%</span>
                  <span className="text-[10px] text-[#23533D] font-medium block mt-1">하루 수천 원대</span>
                </div>
                <div className="p-2.5 bg-[#23533D]/10 rounded-xl border border-[#23533D]/30">
                  <span className="text-[11px] text-[#23533D] font-semibold block">기초생활수급자</span>
                  <span className="font-bold text-[#163829] text-sm block mt-0.5">본인부담 0%</span>
                  <span className="text-[10px] text-[#23533D] font-bold block mt-1">전액 국가 지원</span>
                </div>
              </div>
              <p className="text-[11px] text-[#78716C] mt-3 leading-snug">
                ※ 점심 식사, 오후 간식, 물리 족욕, 맞춤 인지 재활 및 댁 앞 왕복 송영이 모두 포함된 혜택입니다.
              </p>
            </div>

            {/* 카드 2: 복잡한 등급 신청 무료 대행 3단계 */}
            <div className="bg-white border border-[#E0D7C2] rounded-2xl p-4.5 sm:p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-2 text-[#23533D]">
                <FileText className="w-5 h-5 shrink-0" />
                <h3 className="font-batang font-bold text-base text-[#163829]">
                  복잡한 장기요양등급 신청? 무료로 대행해 드립니다
                </h3>
              </div>

              <p className="text-xs text-[#57534E] leading-relaxed mb-4">
                가족분이 직접 공단 서류를 준비하시려면 절차가 복잡하고 어렵습니다. 사계절에 전화 한 통만 주시면 서류 작성부터 공단 방문 조사 동행까지 전부 100% 무료로 도와드립니다.
              </p>

              {/* 3단계 진행 흐름 */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FAF7F0] border border-[#EAE3D2]">
                  <span className="w-6 h-6 rounded-full bg-[#23533D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#163829]">사계절에 전화 한 통 (또는 문자 상담)</h4>
                    <p className="text-[11px] text-[#57534E] mt-0.5">어르신의 현재 건강 상태와 거주지를 편안히 말씀해 주세요.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#FAF7F0] border border-[#EAE3D2]">
                  <span className="w-6 h-6 rounded-full bg-[#23533D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#163829]">공단 인정신청 서류 작성 & 방문조사 동행 지원</h4>
                    <p className="text-[11px] text-[#57534E] mt-0.5">건강보험공단 직원이 댁으로 방문 조사 시 사계절 센터장이 함께하여 어르신의 상태가 정확히 인정받을 수 있도록 돕습니다.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-[#23533D]/8 border border-[#23533D]/25">
                  <span className="w-6 h-6 rounded-full bg-[#23533D] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#163829]">등급 판정 완료 후 바로 안심 이용</h4>
                    <p className="text-[11px] text-[#57534E] mt-0.5">전용 송영 차량으로 댁 앞까지 모시러 가며 안심 케어가 시작됩니다.</p>
                  </div>
                </div>
              </div>

              {/* 신청 모달 열기 버튼 */}
              <button
                onClick={() => {
                  setConsultService('장기요양등급 무료 대행 신청');
                  setIsConsultModalOpen(true);
                }}
                className="w-full mt-4 py-3 bg-[#23533D] hover:bg-[#163829] active:scale-[0.98] text-white rounded-xl font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>장기요양등급 무료 대행 간편 신청하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ⑦ 견학상담 / 오시는 길 ── */}
      <section className="py-12 px-4" id="contact">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            견학·상담 문의
          </div>
          <h2 className="font-batang text-2xl text-[#163829] font-bold leading-snug mb-2">
            전화 한 통이면<br />견학부터 드랍까지 도와드립니다
          </h2>
          <p className="text-[#44403C] text-sm mb-7 font-medium">
            등록하지 않으셔도 괜찮습니다. 등급대행, 센터견학, 전화상담 모두 편하게 문의해 주세요.
          </p>

          <div className="space-y-6">
            {/* 상담 연락처 카드 */}
            <div className="bg-white border border-[#E5DFC9] rounded-2xl p-5 shadow-xs space-y-4">
              <div>
                <h4 className="text-lg font-bold text-[#163829] mb-1">견학·상담 전화</h4>
                <p className="text-xs text-[#44403C] font-medium">
                  평일·주말 상담 가능 · 픽업 차량으로 견학 후 댁까지 모셔다드립니다.
                </p>
              </div>

              <a
                id="big-call-btn"
                href="tel:043-216-4120"
                className="block text-center text-white bg-[#23533D] hover:bg-[#163829] active:scale-[0.98] font-bold text-2xl py-4 px-6 rounded-2xl shadow-md transition-all"
              >
                ☎ 043-216-4120
              </a>

              <a
                href="https://blog.naver.com/ochang4season"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center text-[#23533D] hover:text-white border-2 border-[#23533D] hover:bg-[#23533D] active:scale-[0.98] font-bold text-sm py-3 px-6 rounded-xl transition-all"
              >
                <span>센터 소식 블로그 보러가기</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-4 border-t border-[#E5DFC9] space-y-2 text-xs text-[#292524] font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23533D] shrink-0" />
                  <span>장기요양등급 인정 신청 무료 대행</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23533D] shrink-0" />
                  <span>청주 전 지역 송영 차량 운행</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#23533D] shrink-0" />
                  <span>부담 없는 무료 반나절 체험 견학</span>
                </div>
              </div>
            </div>

            {/* 오시는 길 지도 카드 */}
            <div className="bg-white border border-[#E5DFC9] rounded-2xl p-5 shadow-xs space-y-3.5">
              <div>
                <h4 className="text-lg font-bold text-[#163829] mb-1">오시는 길</h4>
                <p className="text-xs text-[#1C1917] font-semibold leading-relaxed">
                  <strong className="text-[#163829] font-bold">사계절 주간보호센터</strong><br />
                  충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E5DFC9] shadow-2xs">
                <iframe
                  className="w-full h-[220px] border-0 saturate-90"
                  loading="lazy"
                  title="사계절 주간보호센터 오시는 길"
                  src="https://maps.google.com/maps?q=%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EA%B3%BC%ED%95%99%EC%82%B0%EC%97%853%EB%A1%9C%20202-7&output=embed"
                ></iframe>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href="https://map.naver.com/p/search/%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EA%B3%BC%ED%95%99%EC%82%B0%EC%97%853%EB%A1%9C%20202-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-2 bg-[#F4F7F3] hover:bg-[#23533D] text-[#163829] hover:text-white text-xs font-bold rounded-xl transition-colors border border-[#E5DFC9]"
                >
                  네이버 지도
                </a>
                <a
                  href="https://map.kakao.com/link/search/충북 청주시 청원구 오창읍 과학산업3로 202-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-2 bg-[#F4F7F3] hover:bg-[#23533D] text-[#163829] hover:text-white text-xs font-bold rounded-xl transition-colors border border-[#E5DFC9]"
                >
                  카카오맵
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="border-t border-[#E5DFC9] py-8 px-4 text-center text-xs text-[#44403C] leading-relaxed bg-white pb-24">
        <div className="flex justify-center mb-2.5">
          <span className="inline-flex gap-1.5">
            <i className="w-2 h-2 rounded-full bg-[#DB6B88]"></i>
            <i className="w-2 h-2 rounded-full bg-[#2E8B57]"></i>
            <i className="w-2 h-2 rounded-full bg-[#C67D15]"></i>
            <i className="w-2 h-2 rounded-full bg-[#4A82B0]"></i>
          </span>
        </div>
        <p className="font-bold text-[#163829] text-sm">
          사계절 주간보호센터 · 대표 김혜리
        </p>
        <p className="font-medium mt-1">
          충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호
        </p>
        <p className="font-medium">
          ☎ <a href="tel:043-216-4120" className="underline text-[#23533D] font-bold">043-216-4120</a>
        </p>
        <p className="text-[11px] text-[#44403C]/80 mt-2">
          청주 오창 · 옥산 · 오송 · 청원구 어르신 주간보호 &middot; 장기요양등급 무료 상담
        </p>
      </footer>
      </div>

      {/* ── 하단 빠른 상담 플로팅 바 (모바일 프레임 너비에 정렬) ── */}
      <aside
        aria-label="빠른 전화 및 문자 상담"
        className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      >
        <div className="w-full max-w-[480px] bg-white/95 backdrop-blur-md border-t border-x border-[#E5DFC9] px-3.5 py-2.5 shadow-[0_-4px_24px_rgba(0,0,0,0.15)] flex items-center justify-between gap-2 pointer-events-auto">
          <div className="text-xs text-[#44403C] leading-tight min-w-0">
            <span className="block font-bold text-[#163829] text-xs truncate">사계절 주간보호</span>
            <span className="text-[11px] text-[#57534E] truncate">무료 견학 & 등급 대행</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {/* 문자 / 간편 신청 버튼 */}
            <button
              id="mobile-bottom-sms"
              onClick={() => setIsConsultModalOpen(true)}
              className="bg-[#FAF6ED] hover:bg-[#F2ECE0] text-[#163829] border border-[#DDD5BF] py-2 px-3 rounded-xl font-bold text-xs flex items-center gap-1 shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#23533D]" />
              <span>문자·견학신청</span>
            </button>

            {/* 전화 걸기 버튼 */}
            <a
              id="mobile-bottom-call"
              href="tel:043-216-4120"
              className="bg-[#23533D] hover:bg-[#163829] active:scale-95 text-white py-2 px-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>전화 상담</span>
            </a>
          </div>
        </div>
      </aside>

      {/* ── 무료 견학 & 등급 상담 간편 신청 모달 ── */}
      {isConsultModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3.5 sm:p-5"
          onClick={() => setIsConsultModalOpen(false)}
        >
          <div
            className="bg-[#FDFBF7] rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-[#E5DFC9] p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EAE3D2]">
              <div>
                <span className="inline-block text-[10px] font-bold text-[#23533D] bg-[#23533D]/10 px-2 py-0.5 rounded-full mb-1">
                  100% 무료 상담 · 견학
                </span>
                <h3 className="font-batang text-lg sm:text-xl font-bold text-[#163829]">
                  사계절 견학 & 등급 간편 신청
                </h3>
              </div>
              <button
                onClick={() => setIsConsultModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#EFEBE1] hover:bg-[#E5DFC9] text-[#44403C] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* 1. 희망 서비스 선택 */}
              <div>
                <label className="block font-bold text-[#163829] mb-1.5">
                  1. 어떤 상담이 필요하신가요?
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    '무료 2~3시간 체험 견학 (집 앞 픽업)',
                    '장기요양등급 무료 대행 신청',
                    '이용 비용 및 입소 상담'
                  ].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setConsultService(service)}
                      className={`text-left px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                        consultService === service
                          ? 'bg-[#23533D] text-white border-[#23533D]'
                          : 'bg-white text-[#44403C] border-[#E0D7C2] hover:bg-[#F9F6EE]'
                      }`}
                    >
                      <span>{service}</span>
                      {consultService === service && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. 어르신 등급 상태 */}
              <div>
                <label className="block font-bold text-[#163829] mb-1.5">
                  2. 어르신의 장기요양등급 상태
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    '아직 없음 (대행)',
                    '등급 보유 중',
                    '잘 모름'
                  ].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setElderStatus(status)}
                      className={`px-2 py-2 rounded-xl text-[11px] font-semibold border text-center transition-all cursor-pointer ${
                        elderStatus === status
                          ? 'bg-[#163829] text-white border-[#163829]'
                          : 'bg-white text-[#44403C] border-[#E0D7C2] hover:bg-[#F9F6EE]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. 간단 연락처 입력 (선택) */}
              <div className="space-y-2 pt-1">
                <div>
                  <label className="block text-[11px] font-medium text-[#78716C] mb-1">
                    보호자 성함 (선택)
                  </label>
                  <input
                    type="text"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    placeholder="예: 홍길동"
                    className="w-full bg-white border border-[#DDD5BF] rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#23533D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#78716C] mb-1">
                    연락처 (선택)
                  </label>
                  <input
                    type="tel"
                    value={consultPhone}
                    onChange={(e) => setConsultPhone(e.target.value)}
                    placeholder="예: 010-1234-5678"
                    className="w-full bg-white border border-[#DDD5BF] rounded-xl px-3 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#23533D]"
                  />
                </div>
              </div>

              {/* 하단 전송 / 연결 버튼 */}
              <div className="pt-2 space-y-2">
                <a
                  href={`sms:043-216-4120?body=${encodeURIComponent(
                    `[사계절 주간보호 상담 신청]\n• 희망 상담: ${consultService}\n• 어르신 상태: ${elderStatus}${
                      consultName ? `\n• 신청자: ${consultName}` : ''
                    }${consultPhone ? `\n• 연락처: ${consultPhone}` : ''}\n안내 부탁드립니다.`
                  )}`}
                  className="w-full py-3 bg-[#23533D] hover:bg-[#163829] active:scale-[0.98] text-white rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>문자로 바로 문의하기 (SMS 전송)</span>
                </a>

                <a
                  href="tel:043-216-4120"
                  className="w-full py-2.5 bg-white hover:bg-[#F4F7F3] border border-[#23533D] text-[#23533D] rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>전화로 바로 물어보기 (043-216-4120)</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-[#8C8275] leading-snug">
                ※ 사계절 주간보호센터는 개인정보를 상담 목적 외 일체 사용하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── 사진 확대 모달 (Lightbox) ── */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-bold text-[#163829] mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-[#292524] text-xs sm:text-sm leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
