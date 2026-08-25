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
  Navigation
} from 'lucide-react';

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
  },
  {
    id: 'center1',
    src: '/images/센터전경.jpg',
    title: '센터 입구 및 안내데스크',
    category: '전경',
    description: '사계절 주간보호센터의 따뜻하고 정갈한 첫인상을 전해드립니다.'
  },
  {
    id: 'center2',
    src: '/images/센터전경2.jpg',
    title: '센터 전경 및 주차 환경',
    category: '전경',
    description: '송영 차량의 승하차가 편리하고 접근성이 우수한 오창 중심 위치입니다.'
  }
];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<FacilityPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [isLargeText, setIsLargeText] = useState<boolean>(false);

  useEffect(() => {
    if (isLargeText) {
      document.body.classList.add('text-large');
    } else {
      document.body.classList.remove('text-large');
    }
  }, [isLargeText]);

  const categories = ['전체', '실내전경', '휴게시설', '운동·재활', '프로그램', '편의시설', '안전시설'];

  const filteredPhotos = activeCategory === '전체'
    ? facilityPhotos
    : facilityPhotos.filter(p => p.category === activeCategory);

  return (
    <div className={`min-h-screen bg-[#FDFBF7] text-[#1C1917] flex flex-col font-sans-kr selection:bg-[#23533D]/20 selection:text-[#163829] ${isLargeText ? 'text-lg' : 'text-[16.5px]'}`}>
      {/* ── 상단 바 ── */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E5DFC9] transition-all">
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6 h-15 sm:h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-[#163829] font-bold text-base sm:text-lg tracking-tight hover:opacity-90 transition-opacity">
            <span className="inline-flex gap-1 shrink-0">
              <i className="w-2.5 h-2.5 rounded-full bg-[#DB6B88]" title="봄"></i>
              <i className="w-2.5 h-2.5 rounded-full bg-[#2E8B57]" title="여름"></i>
              <i className="w-2.5 h-2.5 rounded-full bg-[#C67D15]" title="가을"></i>
              <i className="w-2.5 h-2.5 rounded-full bg-[#4A82B0]" title="겨울"></i>
            </span>
            <span className="font-batang">사계절 주간보호센터</span>
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* 글자 크기 조절 버튼 */}
            <button
              onClick={() => setIsLargeText(!isLargeText)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all flex items-center gap-1.5 ${
                isLargeText
                  ? 'bg-[#23533D] text-white border-[#23533D]'
                  : 'bg-white text-[#44403C] border-[#E5DFC9] hover:bg-[#F4F7F3]'
              }`}
              title="글자 크기 크게 보기 / 보통으로 보기"
              aria-label="글자 크기 조절"
            >
              <Type className="w-3.5 h-3.5" />
              <span>{isLargeText ? '글자보통' : '글자크게'}</span>
            </button>

            {/* 전화 상담 버튼 */}
            <a
              id="top-call-btn"
              href="tel:043-216-4120"
              className="bg-[#23533D] hover:bg-[#163829] active:scale-95 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>043-216-4120</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── ① 도입부: 대표의 편지 ── */}
      <section className="pt-8 sm:pt-14 pb-14 sm:pb-20 px-3.5 sm:px-6" id="top">
        <div className="max-w-[1040px] mx-auto text-center">
          {/* 사계절 엠블럼 */}
          <div className="flex justify-center mb-4 sm:mb-5">
            <span className="inline-flex gap-1.5">
              <i className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#DB6B88]" title="봄"></i>
              <i className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#2E8B57]" title="여름"></i>
              <i className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C67D15]" title="가을"></i>
              <i className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#4A82B0]" title="겨울"></i>
            </span>
          </div>

          <h1 className="font-batang text-2xl sm:text-3xl md:text-5xl text-[#163829] leading-snug sm:leading-tight font-bold tracking-tight mb-3 sm:mb-4">
            인생의 어느 계절도,<br />소중하지 않은 계절은 없습니다
          </h1>
          <p className="text-[#44403C] text-sm sm:text-base md:text-lg font-medium">
            청주 오창 · 옥산 · 오송 · 청원구 <strong className="text-[#23533D] font-bold">사계절 주간보호센터</strong>
          </p>

          {/* 편지 본문 카드 */}
          <div id="letter" className="max-w-[760px] mx-auto mt-7 sm:mt-12 text-left bg-white border border-[#E5DFC9] border-t-5 sm:border-t-6 border-t-[#23533D] rounded-2xl p-5 sm:p-9 md:p-14 shadow-[0_12px_36px_rgba(35,83,61,0.06)] leading-relaxed sm:leading-loose text-[#1C1917]">
            <p className="font-batang text-lg sm:text-2xl font-bold text-[#163829] text-center leading-relaxed mb-6 sm:mb-8 pb-4 border-b border-[#E5DFC9]">
              안녕하세요.<br />
              어린이집 교사 10년 경력,<br />
              사계절 주간보호센터 대표 김혜리입니다.
            </p>

            <p className="mb-5 text-[#292524] font-medium">먼저 자기소개를 해야겠지요?</p>

            <h3 className="flex items-center gap-2.5 text-base sm:text-xl font-bold text-[#163829] mt-7 sm:mt-9 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DB6B88] shrink-0"></span>
              저는 10년 동안 어린이집 교사로 살아왔습니다
            </h3>
            <p className="mb-5 text-[#292524] leading-relaxed">
              아침마다 고사리 같은 손을 잡고 등원하는 어린아이들을 맞이하는 일, 어제까지 해내지 못하던 것을 오늘 처음 해내는 순간들을 지켜보는 일이 저의 하루였고, 저의 자부심이었는데요.
            </p>

            {/* 대표 사진 */}
            <figure className="my-6 sm:my-8 max-w-[420px] mx-auto bg-white border border-[#E5DFC9] rounded-xl p-2.5 sm:p-3.5 shadow-sm">
              <img
                src="/images/대표님사진.jpg"
                alt="어린이집 교사 시절, 아이와 함께한 김혜리 대표"
                className="w-full h-auto rounded-lg object-cover aspect-4/3"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <figcaption className="text-center mt-2.5 text-xs sm:text-sm font-semibold text-[#44403C] leading-normal">
                아이들과 함께한 10년, 어린이집 교사 시절의 저입니다.
              </figcaption>
            </figure>

            <p className="mb-5 text-[#292524] leading-relaxed">
              그런 제가 청주 지역 어르신들을 모시는 일을 시작하게 된 것은, 저와 같이 살던 할머니 때문이었습니다.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              할머니는 늘 동네 경로당이나 노인정에 가서 친구들과 재미있게 하루를 보내시던 분이셨어요. 그런데 언제부턴가 경로당, 노인정 문화가 점차 줄어들면서 저희 할머니 또한 자연스럽게 사람 만나는 일이 줄어가셨습니다.
            </p>

            <h3 className="flex items-center gap-2.5 text-base sm:text-xl font-bold text-[#163829] mt-7 sm:mt-9 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B57] shrink-0"></span>
              그런데 그 변화는 생각보다 무척 빨랐습니다
            </h3>
            <p className="mb-5 text-[#292524] leading-relaxed">
              걸음도 확실히 느려지시고, 며칠 전 일도 자주 까먹으시고, 하루하루 활력을 잃어가시는 모습을 보면서 참 마음이 아렸던 것 같아요.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              정작 어린이집에 출근해서 아이들과 행복하게 보내는 순간순간마다, 나만 이렇게 행복해도 되는지, 집에서 적적하게 보내실 할머니 생각이 나더라고요.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              어떻게 해드려야 하나 고민하다 주간보호센터라는 것을 알게 되었고, 할머니께 권해드렸을 때{' '}
              <span className="inline-block bg-[#FDF4E6] border-l-4 border-[#C67D15] px-2.5 py-1 my-1 font-bold text-[#1C1917] rounded-r">
                "눈에 흙이 들어가기 전까지 그런 곳은 가지 않겠다"
              </span>
              고, 아프기 시작하니 요양원에 보내는 거냐고 수차례 손사래를 치셨습니다.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              정말 딱 한 번만 가보자고 설득한 끝에 주간보호를 다니기 시작하셨는데, 정말 놀라운 일이 일어났습니다.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              또래 어르신들과 함께 이야기를 나누고 프로그램에 참여하시면서, 경로당을 다니셨을 때의 그 미소와 웃음, 행복을 되찾으시더라고요.
            </p>

            {/* 할머니 사진 */}
            <figure className="my-6 sm:my-8 max-w-[420px] mx-auto bg-white border border-[#E5DFC9] rounded-xl p-2.5 sm:p-3.5 shadow-sm">
              <img
                src="/images/할머니사진.jpg"
                alt="김혜리 대표와 할머니가 마주 앉아 웃으며 이야기하는 모습"
                className="w-full h-auto rounded-lg object-cover aspect-4/3"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <figcaption className="text-center mt-2.5 text-xs sm:text-sm font-semibold text-[#44403C] leading-normal">
                제 인생의 방향을 바꿔주신, 저와 저희 할머니입니다.
              </figcaption>
            </figure>

            <h3 className="flex items-center gap-2.5 text-base sm:text-xl font-bold text-[#163829] mt-7 sm:mt-9 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C67D15] shrink-0"></span>
              그때 깨달은 게 한 가지 있습니다
            </h3>
            <p className="mb-3.5 text-[#292524] leading-relaxed">
              우리 어르신들도, 우리 어린아이들처럼 돌봐줄 누군가가 필요하구나.<br />
              아이들만 자라는 것이 아니구나.
            </p>
            <p className="mb-3.5 text-[#292524] leading-relaxed">
              어린이집에서 아이들의 첫걸음을 지켜보던 그 마음으로, 이제는 어르신들의 하루하루를 지켜드리려고 합니다.
            </p>
            <p className="mb-5 text-[#292524] leading-relaxed">
              10년 동안 아이 하나하나를 살피던 그 세심함으로, 어르신 한 분 한 분의 표정과 마음을 살펴드리려고 합니다.
            </p>

            {/* 사계절 구절 */}
            <div className="bg-[#F7F4EC] border border-[#E5DFC9] rounded-xl p-4 sm:p-6 my-6 sm:my-7 text-center leading-loose font-batang text-base sm:text-lg">
              봄, 여름, 가을, 겨울 — 인생의 어느 계절도 소중하지 않은 계절이 없지요.<br />
              <b className="text-[#DB6B88] font-bold">봄은 봄답게, </b>
              <b className="text-[#2E8B57] font-bold">여름은 여름답게,</b><br />
              <b className="text-[#C67D15] font-bold">가을은 가을답게, </b>
              <b className="text-[#4A82B0] font-bold">겨울은 겨울답게</b><br />
              보내실 수 있도록 최선을 다하겠습니다.
            </div>

            <p className="mb-5 text-[#292524] leading-relaxed">
              제가 할머니를 통해 경험한 변화들과 기쁨, 행복들을 이제 청주의 가족보호자분들과 어르신들께 전해드리겠습니다.
            </p>

            <h3 className="flex items-center gap-2.5 text-base sm:text-xl font-bold text-[#163829] mt-7 sm:mt-9 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A82B0] shrink-0"></span>
              등록하지 않으시더라도
            </h3>
            <p className="mb-4 text-[#292524] leading-relaxed">
              손녀 된 마음으로 <strong className="text-[#163829] font-bold underline decoration-[#23533D]/30 underline-offset-4">등급대행, 센터견학, 전화상담</strong>의 문을 활짝 열어두고 있으니, 편하게 문의 부탁드릴게요.
            </p>
            <p className="mb-7 text-[#292524]">감사합니다.</p>
            <p className="text-right font-batang font-bold text-[#163829] text-base sm:text-xl">
              사계절 주간보호센터 대표 김혜리 올림
            </p>
          </div>
        </div>
      </section>

      {/* ── ② 고민되신다면 견학부터 추천드립니다 (어르신 견학일지) ── */}
      <section className="bg-[#F4F7F3] py-12 sm:py-20 px-3.5 sm:px-6 border-y border-[#E5DFC9]" id="visit">
        <div className="max-w-[1040px] mx-auto">
          <div id="journal">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#23533D] uppercase mb-2">
              <span className="w-5 h-0.5 bg-[#23533D]"></span>
              견학 안내 & 견학일지
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-batang font-bold text-2xl sm:text-3xl text-[#163829] mb-2">
              <span>📖 어르신 견학일지</span>
            </div>

            <h2 className="font-batang font-bold text-xl sm:text-2xl md:text-3xl text-[#23533D] mb-2 leading-snug">
              고민되신다면 견학부터 추천드립니다.
            </h2>

            <p className="text-[#44403C] text-sm sm:text-base mb-8 sm:mb-10 font-medium">
              경로당, 노인정만 다니시던 할머니들이 사계절에 견학 오셔서 남겨주신 진짜 말씀들입니다.
            </p>

            {/* 견학 카드 목록 */}
            <div className="space-y-6 sm:space-y-10">
              {/* 견학일지 하나 */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center bg-white p-4 sm:p-7 rounded-2xl border border-[#E5DFC9] shadow-xs">
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-[#EDE9DD] border border-[#E5DFC9] group relative">
                  <img
                    src="/images/견학사진.jpg"
                    alt="견학 오신 어르신들이 직접 만든 부채를 들고 함께 찍은 단체사진"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/견학사진1.jpg';
                    }}
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-xs">
                    부채 만들기 프로그램
                  </span>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  <span className="inline-block text-xs font-bold tracking-wider text-[#23533D] bg-[#F4F7F3] border border-[#23533D]/40 rounded-full px-3 py-1">
                    견학일지 하나
                  </span>
                  <blockquote className="font-batang text-xl sm:text-2xl md:text-3xl font-bold text-[#163829] leading-snug">
                    <span className="text-[#C67D15]">“</span>이런 곳이 있는 줄<br />꿈에도 몰랐어<span className="text-[#C67D15]">”</span>
                  </blockquote>
                  <p className="text-[#292524] text-sm sm:text-base leading-relaxed">
                    경로당과 노인정만 다니시던 어르신들이 센터에 들어서시자마자 눈이 동그래지셨습니다. 예쁜 부채도 직접 만들어보시고, 식사와 간식, 경청해 드리는 선생님들까지 하나하나 놀라워하셨어요.
                  </p>
                </div>
              </div>

              {/* 견학일지 둘 */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center bg-white p-4 sm:p-7 rounded-2xl border border-[#E5DFC9] shadow-xs">
                <div className="md:order-2 aspect-4/3 rounded-xl overflow-hidden bg-[#EDE9DD] border border-[#E5DFC9] group relative">
                  <img
                    src="/images/족욕.jpg"
                    alt="어르신들이 족욕을 하며 선생님과 함께 즐거워하는 모습"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-xs">
                    편백 온열 족욕
                  </span>
                </div>
                <div className="space-y-2.5 sm:space-y-3 md:order-1">
                  <span className="inline-block text-xs font-bold tracking-wider text-[#23533D] bg-[#F4F7F3] border border-[#23533D]/40 rounded-full px-3 py-1">
                    견학일지 둘
                  </span>
                  <blockquote className="font-batang text-xl sm:text-2xl md:text-3xl font-bold text-[#163829] leading-snug">
                    <span className="text-[#C67D15]">“</span>평생 이런 대접을<br />언제 받아보겠냐<span className="text-[#C67D15]">”</span>
                  </blockquote>
                  <p className="text-[#292524] text-sm sm:text-base leading-relaxed">
                    따뜻한 족욕에 발을 담그시고는 호강도 이런 호강이 없다고 하시며 반나절 내내 웃음이 끊이지 않으셨습니다. 친구들 만나러 가는 설렘, 그 마음 그대로 다니실 수 있는 곳이 되겠습니다.
                  </p>
                </div>
              </div>

              {/* 견학일지 셋 */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center bg-white p-4 sm:p-7 rounded-2xl border border-[#E5DFC9] shadow-xs">
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-[#EDE9DD] border border-[#E5DFC9] group relative">
                  <img
                    src="/images/두타매트사진.jpg"
                    alt="어르신이 두타매트에 편안하게 누워 계신 모습"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-xs">
                    두타매트 마사지
                  </span>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  <span className="inline-block text-xs font-bold tracking-wider text-[#23533D] bg-[#F4F7F3] border border-[#23533D]/40 rounded-full px-3 py-1">
                    견학일지 셋
                  </span>
                  <blockquote className="font-batang text-xl sm:text-2xl md:text-3xl font-bold text-[#163829] leading-snug">
                    <span className="text-[#C67D15]">“</span>두타매트,<br />10분만 더 해도 될까?<span className="text-[#C67D15]">”</span>
                  </blockquote>
                  <p className="text-[#292524] text-sm sm:text-base leading-relaxed">
                    두타매트는 인기가 너무 많아서 친구들끼리 순번을 정해 이용하실 정도였답니다.^^ 견학만 오셔도 직접 체험해 보실 수 있어요.
                  </p>
                </div>
              </div>

              {/* 견학일지 넷 */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center bg-white p-4 sm:p-7 rounded-2xl border border-[#E5DFC9] shadow-xs">
                <div className="md:order-2 aspect-4/3 rounded-xl overflow-hidden bg-[#EDE9DD] border border-[#E5DFC9] group relative">
                  <img
                    src="/images/견학사진2.jpg"
                    alt="견학 어르신 안전 귀가 송영 배웅"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/견학사진3.jpg';
                    }}
                  />
                  <span className="absolute bottom-2.5 right-2.5 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md font-medium backdrop-blur-xs">
                    안전 송영 & 배웅
                  </span>
                </div>
                <div className="space-y-2.5 sm:space-y-3 md:order-1">
                  <span className="inline-block text-xs font-bold tracking-wider text-[#23533D] bg-[#F4F7F3] border border-[#23533D]/40 rounded-full px-3 py-1">
                    견학이 끝나면
                  </span>
                  <blockquote className="font-batang text-xl sm:text-2xl md:text-3xl font-bold text-[#163829] leading-snug">
                    <span className="text-[#C67D15]">“</span>댁까지 안전하게<br />모셔다드립니다<span className="text-[#C67D15]">”</span>
                  </blockquote>
                  <p className="text-[#292524] text-sm sm:text-base leading-relaxed">
                    견학이 끝나면 어르신을 댁까지 안전히 모셔다드립니다. 그러니 가족보호자님은 전화 한 통만 부탁드려요. "엄마, 어떠셨어요? 다녀보실래요?"
                  </p>
                </div>
              </div>
            </div>

            {/* 견학 및 체험 안내 고시 */}
            <div className="mt-8 sm:mt-10 bg-white border-2 border-[#23533D]/30 rounded-2xl p-5 sm:p-7 text-center text-sm sm:text-base text-[#292524] leading-relaxed shadow-xs">
              <p className="font-bold text-[#163829]">
                ※ 견학은 <strong className="text-[#23533D] underline underline-offset-4">2~3시간 체험</strong>을 위주로 진행되오며, <strong className="text-[#163829]">하루체험</strong>을 희망하신다면 공단법령상 체험비가 발생할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ③ 실내 사진 및 시설 공간 갤러리 ── */}
      <section className="py-12 sm:py-20 px-3.5 sm:px-6" id="photos">
        <div className="max-w-[1040px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            실내 사진 & 공간 소개
          </div>
          <h2 className="font-batang text-2xl sm:text-3xl md:text-4xl text-[#163829] font-bold leading-snug mb-2">
            어르신들이 머무실<br />사계절의 공간입니다
          </h2>
          <p className="text-[#44403C] max-w-2xl text-sm sm:text-base mb-6 sm:mb-8 font-medium">
            사진으로 먼저 둘러보시고, 견학 오셔서 직접 눈으로 확인해 주세요. (사진 터치 시 크게 보실 수 있습니다)
          </p>

          {/* 카테고리 필터 버튼 목록 */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#23533D] text-white shadow-xs'
                    : 'bg-white text-[#44403C] border border-[#E5DFC9] hover:bg-[#F4F7F3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 사진 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer bg-white rounded-2xl border border-[#E5DFC9] overflow-hidden shadow-xs hover:shadow-md hover:border-[#23533D]/60 transition-all flex flex-col"
              >
                <div className="aspect-4/3 w-full bg-[#EFEBE1] relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#163829] px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
                      <Maximize2 className="w-3.5 h-3.5" /> 크게보기
                    </span>
                  </div>
                  <span className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#23533D] text-xs font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {photo.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#163829] mb-1 group-hover:text-[#23533D] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ④ 개별케어 약속 ── */}
      <section className="bg-[#163829] text-[#F3F1EA] py-14 sm:py-20 px-4 sm:px-6 text-center" id="care">
        <div className="max-w-[800px] mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#C67D15] uppercase mb-3 sm:mb-4">
            <span className="w-5 h-0.5 bg-[#C67D15]"></span>
            사계절의 약속
            <span className="w-5 h-0.5 bg-[#C67D15]"></span>
          </div>

          <h2 className="font-batang text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-snug mb-5 sm:mb-6">
            어르신 한 분 한 분께,<br />사랑을 가득 부어드리겠습니다
          </h2>

          <p className="text-[#DCE5DD] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
            저희는 이제 막 문을 연 <strong className="text-white font-bold">새 센터</strong>입니다. 아직 어르신들이 가득하지는 않지만, 그래서 오히려 드릴 수 있는 것이 있습니다.
          </p>

          <div className="font-batang text-lg sm:text-2xl text-white leading-relaxed my-7 sm:my-10 p-5 sm:p-8 bg-white/10 border border-white/15 rounded-2xl backdrop-blur-xs">
            어르신 한 분 한 분이 센터에 잘 적응해 나가실 수 있도록<br />
            <strong className="text-[#FBBF24] font-bold">세심한 개별케어</strong>를 제공하겠습니다.<br />
            절대 허전하다고 느끼지 않으시도록,<br />
            사랑을 가득 부어드리겠습니다.
          </div>

          <p className="text-[#DCE5DD] text-xs sm:text-base leading-relaxed">
            어린이집에서 아이 하나하나를 살피던 그 마음 그대로, 어르신의 표정 하나, 말씀 한마디를 놓치지 않겠습니다.
          </p>
        </div>
      </section>

      {/* ── ⑤ 견학상담 / 오시는 길 ── */}
      <section className="py-12 sm:py-20 px-3.5 sm:px-6" id="contact">
        <div className="max-w-[1040px] mx-auto">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#23533D] uppercase mb-2">
            <span className="w-5 h-0.5 bg-[#23533D]"></span>
            견학·상담 문의
          </div>
          <h2 className="font-batang text-2xl sm:text-3xl md:text-4xl text-[#163829] font-bold leading-snug mb-2">
            전화 한 통이면<br />견학부터 드랍까지 도와드립니다
          </h2>
          <p className="text-[#44403C] max-w-2xl text-sm sm:text-base mb-8 sm:mb-10 font-medium">
            등록하지 않으셔도 괜찮습니다. 등급대행, 센터견학, 전화상담 모두 편하게 문의해 주세요.
          </p>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* 상담 연락처 카드 */}
            <div className="bg-white border border-[#E5DFC9] rounded-2xl p-5 sm:p-8 shadow-xs space-y-4 sm:space-y-5">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#163829] mb-1">견학·상담 전화</h4>
                <p className="text-xs sm:text-sm text-[#44403C] font-medium">
                  평일·주말 상담 가능 · 픽업 차량으로 견학 후 댁까지 모셔다드립니다.
                </p>
              </div>

              <a
                id="big-call-btn"
                href="tel:043-216-4120"
                className="block text-center text-white bg-[#23533D] hover:bg-[#163829] active:scale-[0.98] font-bold text-2xl sm:text-3xl py-4 sm:py-5 px-6 rounded-2xl shadow-md transition-all"
              >
                ☎ 043-216-4120
              </a>

              <a
                href="https://blog.naver.com/ochang4season"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center text-[#23533D] hover:text-white border-2 border-[#23533D] hover:bg-[#23533D] active:scale-[0.98] font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all"
              >
                <span>센터 소식 블로그 보러가기</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="pt-4 border-t border-[#E5DFC9] space-y-2.5 text-xs sm:text-sm text-[#292524] font-medium">
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
            <div className="bg-white border border-[#E5DFC9] rounded-2xl p-5 sm:p-8 shadow-xs space-y-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#163829] mb-1">오시는 길</h4>
                <p className="text-xs sm:text-sm text-[#1C1917] font-semibold leading-relaxed">
                  <strong className="text-[#163829] font-bold">사계절 주간보호센터</strong><br />
                  충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E5DFC9] shadow-2xs">
                <iframe
                  className="w-full h-[240px] sm:h-[280px] border-0 saturate-90"
                  loading="lazy"
                  title="사계절 주간보호센터 오시는 길"
                  src="https://maps.google.com/maps?q=%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EA%B3%BC%ED%95%99%EC%82%B0%EC%97%853%EB%A1%9C%20202-7&output=embed"
                ></iframe>
              </div>

              <div className="flex gap-2.5 pt-1">
                <a
                  href="https://map.naver.com/p/search/%EC%B6%A9%EB%B6%81%20%EC%B2%AD%EC%A3%BC%EC%8B%9C%20%EC%B2%AD%EC%9B%90%EA%B5%AC%20%EC%98%A4%EC%B0%BD%EC%9D%8D%20%EA%B3%BC%ED%95%99%EC%82%B0%EC%97%853%EB%A1%9C%20202-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 sm:py-3 px-2 bg-[#F4F7F3] hover:bg-[#23533D] text-[#163829] hover:text-white text-xs sm:text-sm font-bold rounded-xl transition-colors border border-[#E5DFC9]"
                >
                  네이버 지도
                </a>
                <a
                  href="https://map.kakao.com/link/search/충북 청주시 청원구 오창읍 과학산업3로 202-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 sm:py-3 px-2 bg-[#F4F7F3] hover:bg-[#23533D] text-[#163829] hover:text-white text-xs sm:text-sm font-bold rounded-xl transition-colors border border-[#E5DFC9]"
                >
                  카카오맵
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 푸터 ── */}
      <footer className="border-t border-[#E5DFC9] py-8 sm:py-10 px-4 sm:px-6 text-center text-xs sm:text-sm text-[#44403C] leading-loose bg-white mb-16 md:mb-0">
        <div className="flex justify-center mb-2.5">
          <span className="inline-flex gap-1.5">
            <i className="w-2 h-2 rounded-full bg-[#DB6B88]"></i>
            <i className="w-2 h-2 rounded-full bg-[#2E8B57]"></i>
            <i className="w-2 h-2 rounded-full bg-[#C67D15]"></i>
            <i className="w-2 h-2 rounded-full bg-[#4A82B0]"></i>
          </span>
        </div>
        <p className="font-bold text-[#163829]">
          사계절 주간보호센터 · 대표 김혜리
        </p>
        <p className="font-medium">
          충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호 · ☎ <a href="tel:043-216-4120" className="underline text-[#23533D] font-bold">043-216-4120</a>
        </p>
        <p className="text-xs text-[#44403C]/80 mt-1">
          청주 오창 · 옥산 · 오송 · 청원구 어르신 주간보호 &middot; 장기요양등급 무료 상담
        </p>
      </footer>

      {/* ── 모바일 하단 빠른 상담 플로팅 바 (반응형 최적화) ── */}
      <aside aria-label="빠른 전화 상담" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E5DFC9] px-3.5 py-2.5 shadow-2xl flex items-center justify-between gap-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="text-xs text-[#44403C] leading-tight">
          <span className="block font-bold text-[#163829] text-xs sm:text-sm">사계절 주간보호</span>
          <span className="text-[11px] text-[#57534E]">견학 & 등급 상담 환영</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            id="mobile-bottom-call"
            href="tel:043-216-4120"
            className="bg-[#23533D] hover:bg-[#163829] active:scale-95 text-white py-2.5 px-4 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-1.5 shadow-md"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>전화 상담하기</span>
          </a>
        </div>
      </aside>

      {/* ── 사진 확대 모달 (Lightbox) ── */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <span className="inline-block text-xs font-bold text-[#23533D] bg-[#F4F7F3] px-2.5 py-1 rounded-md mb-2">
                {selectedPhoto.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#163829] mb-1.5">
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
