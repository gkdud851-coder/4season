import React, { useState, useRef, useEffect } from 'react';

interface FacilityItem {
  src: string;
  caption: string;
}

interface ActivityItem {
  src: string;
  caption: string;
  objectPositionClass: string;
}

interface MealItem {
  src: string;
  imgClass: string;
}

interface BlogItem {
  num: string;
  title: string;
  url: string;
}

const FACILITY_PHOTOS: FacilityItem[] = [
  { src: '/images/facility-1-entrance.jpg', caption: '센터 입구' },
  { src: '/images/facility-2-walking-sling.jpg', caption: '워킹 슬링 재활 운동' },
  { src: '/images/facility-3-program-room.jpg', caption: '프로그램실' },
  { src: '/images/facility-4-massage-exercise.jpg', caption: '안마의자 · 운동기구' },
  { src: '/images/facility-5-footbath.jpg', caption: '족욕실' },
  { src: '/images/facility-6-hair-salon.jpg', caption: '어르신 전용 이미용실' },
  { src: '/images/facility-7-restroom.jpg', caption: '안전 손잡이 화장실' },
  { src: '/images/facility-8-kitchen.jpg', caption: '청결 조리실' },
];

const ACTIVITY_PHOTOS: ActivityItem[] = [
  { src: '/images/activity-01-footbath.jpg', caption: '따뜻한 족욕 시간', objectPositionClass: 'object-[50%_50%]' },
  { src: '/images/activity-02-birthday.jpg', caption: '함께 차리는 생신 잔치', objectPositionClass: 'object-[50%_50%]' },
  { src: '/images/activity-03-spoon-ball.jpg', caption: '숟가락 공 옮기기', objectPositionClass: 'object-[50%_45%]' },
  { src: '/images/activity-04-cup-stacking.jpg', caption: '컵 쌓기 놀이', objectPositionClass: 'object-[50%_60%]' },
  { src: '/images/activity-05-fish-craft.jpg', caption: '반짝이 물고기 꾸미기', objectPositionClass: 'object-[50%_55%]' },
  { src: '/images/activity-06-stick-game.jpg', caption: '막대 잡기 게임', objectPositionClass: 'object-[50%_50%]' },
  { src: '/images/activity-07-wedding-photo.jpg', caption: '추억의 웨딩 사진', objectPositionClass: 'object-[50%_55%]' },
  { src: '/images/activity-08-wedding-day.jpg', caption: '웨딩 사진 촬영 날', objectPositionClass: 'object-[50%_45%]' },
  { src: '/images/activity-09-fire-drill.jpg', caption: '화재 대피 훈련', objectPositionClass: 'object-[50%_50%]' },
  { src: '/images/activity-10-market-outing.jpg', caption: '장터 나들이', objectPositionClass: 'object-[50%_50%]' },
];

const MEAL_PHOTOS: MealItem[] = [
  { src: '/images/meal-1.jpg', imgClass: 'scale-[1.13] -translate-x-[1.2%] -translate-y-[0.8%]' },
  { src: '/images/meal-2.jpg', imgClass: 'scale-[1.12] -translate-x-[2.2%] -translate-y-[2.5%]' },
  { src: '/images/meal-3.jpg', imgClass: 'scale-[1.06]' },
  { src: '/images/meal-4.jpg', imgClass: 'scale-[1.13] translate-y-[0.5%]' },
  { src: '/images/meal-5.jpg', imgClass: 'scale-[1.06] translate-x-[2%]' },
  { src: '/images/meal-6.jpg', imgClass: 'scale-[1.07]' },
  { src: '/images/meal-7.jpg', imgClass: 'scale-[1.06] translate-x-[1.8%]' },
  { src: '/images/meal-8.jpg', imgClass: 'scale-[1.04] -translate-x-[1%]' },
];

const BLOG_POSTS: BlogItem[] = [
  {
    num: '01',
    title: '꿈, 어르신에게도 꿈이 있습니다',
    url: 'https://blog.naver.com/ochang4season/224480282861',
  },
  {
    num: '02',
    title: '내가 생각하는 좋은 하루와, 어르신이 원하는 하루 사이에서',
    url: 'https://blog.naver.com/ochang4season/224478877665',
  },
  {
    num: '03',
    title: '어르신의 하루, 국밥 한 그릇 값보다 아까운 것은 무엇일까요?',
    url: 'https://blog.naver.com/ochang4season/224466920941',
  },
  {
    num: '04',
    title: '“좋으면 좋다고 말씀해 주셔도 되는데유~” 정 많은 충청도 어르신 이야기',
    url: 'https://blog.naver.com/ochang4season/224460139967',
  },
  {
    num: '05',
    title: '어르신, 고맙지만 미안해하지는 않으셨으면 좋겠습니다',
    url: 'https://blog.naver.com/ochang4season/224455027265',
  },
  {
    num: '06',
    title: '아들의 알림장을 읽고, 누군가의 부모님 하루를 전합니다.',
    url: 'https://blog.naver.com/ochang4season/224450013750',
  },
  {
    num: '07',
    title: '‘우리가 좋다고 생각하는 것이, 부모님께도 좋은 것일까요?’',
    url: 'https://blog.naver.com/ochang4season/224446253000',
  },
  {
    num: '08',
    title: '“나는 아직 갈 때가 아니여~”라는 말을 들을 때마다..',
    url: 'https://blog.naver.com/ochang4season/224420001377',
  },
];

function PhoneIcon({ size = 16, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#23533D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function App() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<MealItem | null>(null);
  const storySectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedMeal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMeal(null);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMeal]);

  const handleToggleStory = () => {
    const nextOpen = !isStoryOpen;
    setIsStoryOpen(nextOpen);
    if (!nextOpen) {
      storySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans text-[#1F2A24] bg-[#F3EFE6] min-h-screen">
      <div className="max-w-[480px] mx-auto bg-[#FBF8F2] shadow-[0_0_0_1px_#E6DFD0]">
        {/* 헤더 */}
        <header className="flex items-center justify-between gap-3 px-5 py-[14px] bg-[#FBF8F2] border-b border-[#E6DFD0]">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-[#D9667A]" />
              <span className="w-2 h-2 rounded-full bg-[#3F8A55]" />
              <span className="w-2 h-2 rounded-full bg-[#C98A1B]" />
              <span className="w-2 h-2 rounded-full bg-[#3C6FA8]" />
            </span>
            <span className="font-bold text-[17px] text-[#1B3A2B]">사계절 주간보호센터</span>
          </div>
          <a
            href="tel:0432164120"
            className="flex items-center gap-[6px] min-h-[44px] px-4 rounded-full bg-[#23533D] hover:bg-[#163829] text-white font-bold text-[15px] no-underline"
          >
            <PhoneIcon size={16} strokeWidth={2} />
            전화 상담
          </a>
        </header>

        {/* 히어로 */}
        <section className="relative h-[320px] bg-[#BDB6A3] flex flex-col justify-end">
          <img
            src="/images/hero-main-hall.jpg"
            alt="사계절 주간보호센터 메인 홀 전경"
            className="absolute inset-0 w-full h-full object-cover block"
          />
          <div className="relative px-5 py-6 bg-[linear-gradient(0deg,rgba(20,32,25,0.82),rgba(20,32,25,0))] text-white">
            <p className="m-0 mb-[6px] text-[14px] text-[#E9E2D2]">청주 오창 · 옥산 · 오송 · 청원구</p>
            <h1 className="m-0 font-serif text-[28px] leading-[1.35] font-bold">
              어르신의 하루를
              <br />
              가족처럼 모십니다
            </h1>
          </div>
        </section>

        {/* 대표 인사 */}
        <section className="pt-12 px-5 pb-10">
          <p className="m-0 mb-[10px] text-[14px] font-bold text-[#23533D]">대표 인사</p>
          <h2 className="m-0 mb-5 font-serif text-[23px] leading-[1.45] font-bold text-[#1B3A2B]">
            인생의 어느 계절도,
            <br />
            소중하지 않은 계절은 없습니다
          </h2>
          <div className="flex gap-4 items-start">
            <figure className="shrink-0 basis-[112px] m-0">
              <img
                src="/images/ceo-kim-hyeri.jpg"
                alt="어린이집 교사 시절의 김혜리 대표"
                className="w-[112px] h-[150px] object-cover object-[0%_25%] rounded-[12px] block bg-[#DDD6C6]"
              />
              <figcaption className="mt-[6px] text-[12px] leading-[1.4] text-[#5C574B] text-center">
                어린이집 교사 시절
              </figcaption>
            </figure>
            <div className="flex-1 min-w-0 text-[16px] leading-[1.75] text-[#33403A]">
              <p className="m-0 mb-3">
                어린이집 교사로 10년을 지내며 따뜻한 돌봄이 사람의 하루를 얼마나 환하게 바꾸는지 배웠습니다.
              </p>
              <p className="m-0">
                할머니가 주간보호센터에 다니시며 웃음을 되찾으신 모습을 보고, 어르신들께도 진심 어린 온기와 친구가 필요하다는 것을 알았습니다.
              </p>
            </div>
          </div>
          <p className="mt-5 mb-0 px-[18px] py-4 rounded-[12px] bg-[#EFEADF] text-[16px] leading-[1.7] text-[#1B3A2B] font-medium">
            등급이 없으셔도, 등록하지 않으셔도 괜찮습니다. 편하게 전화 한 통 주세요.
          </p>
          <p className="mt-5 mb-0 text-right text-[15px] text-[#5C574B]">
            사계절 주간보호센터 대표{' '}
            <strong className="font-serif text-[19px] font-bold text-[#1B3A2B]">김혜리</strong>
          </p>
        </section>

        {/* 사계절 이야기 */}
        <section
          ref={storySectionRef}
          className="py-10 px-5 bg-[#F4EEE1] border-t border-[#E6DFD0]"
        >
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">사계절 이야기</p>
          <h2 className="m-0 mb-[10px] font-serif text-[22px] leading-[1.45] font-bold text-[#1B3A2B]">
            평생 농사지으며 살아오신
            <br />
            어르신들이 많으시죠?
          </h2>
          <p className="m-0 mb-[18px] text-[16px] leading-[1.7] text-[#33403A]">
            들녘을 지나 아침마다 어르신 모시러 가는 길에 있었던 이야기를 하나 들려드릴게요.
          </p>
          <img
            src="/images/story-1-rice-field.jpg"
            alt="송영길 창밖으로 보이는 벼 베는 들녘"
            className="w-full aspect-[466/300] object-cover rounded-[12px] block mb-[18px] bg-[#DDD6C6]"
          />
          <div className="text-[16px] leading-[1.8] text-[#33403A]">
            <p className="m-0 mb-3">저희 송영 차량 중 한 곳에는 항상 정겨운 웃음꽃이 피어납니다.</p>
            <p className="m-0 mb-3">
              한 어르신께서 아침마다 “운전하느라 고생한다”, “심심할 때 드셔라” 하시며 함께 타신 어르신들 손에 달콤한 사탕을 쥐여주시곤 했는데요.
            </p>
            <p className="m-0">
              오늘 아침에는 다른 어르신께서 주머니에서 쓱 사탕을 꺼내시는 게 아니겠어요?
            </p>
          </div>

          <div id="story-more" hidden={!isStoryOpen}>
            <div className="mt-3 text-[16px] leading-[1.8] text-[#33403A]">
              <p className="m-0 mb-3 font-bold text-[#1B3A2B]">
                “매일 받기만 해서 미안혀서, 오늘은 내가 집에서 사탕 챙겨왔어~”
              </p>
              <p className="m-0 mb-3">
                그 말씀에 차 안에 웃음이 번졌습니다. 사탕 하나가 뭐 그리 대단한 것이겠습니까. 그런데 서로 챙겨주시는 모습을 보고 있으니 저까지 참 기분이 좋았습니다.
              </p>

              <h3 className="mt-7 mb-3 text-[18px] leading-[1.45] font-bold text-[#1B3A2B]">
                벼 익는 들녘과 옛 추억이 흐르는 길
              </h3>
              <img
                src="/images/story-2-sesame-field.jpg"
                alt="송영길에 지나는 깨밭"
                className="w-full aspect-[4/3] object-cover rounded-[12px] block mb-[14px] bg-[#DDD6C6]"
              />
              <p className="m-0 mb-3">
                “이젠 벼 베어야 할 시기네~” “예전에는 이맘때쯤 참 바쁘고 고생도 많았지.”
              </p>
              <p className="m-0 mb-3">
                창밖으로 황금빛 논이 보이면 어르신들께서 자연스럽게 옛날 농사짓던 이야기를 꺼내십니다. 깨밭을 지날 때면 깨를 털던 시절의 추억도 나누시고요. 한 분이 이야기를 시작하시면 다른 어르신께서도 자신의 경험을 보태시며 이야기꽃을 피우십니다.
              </p>
              <p className="m-0 mb-3">
                저는 운전하면서 그 이야기를 듣는 시간이 참 좋습니다. 매일 오가는 같은 길이지만, 어르신들의 이야기를 듣다 보면 평범했던 시골 풍경도 새롭게 느껴집니다.
              </p>

              <h3 className="mt-7 mb-3 text-[18px] leading-[1.45] font-bold text-[#1B3A2B]">
                집 마당에서 전해지는 따뜻한 마음
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <img
                  src="/images/story-3-persimmon.jpg"
                  alt="어르신댁 마당의 감나무"
                  className="w-full aspect-square object-cover rounded-[12px] block bg-[#DDD6C6]"
                />
                <img
                  src="/images/story-3-apple.jpg"
                  alt="어르신댁 마당의 사과나무"
                  className="w-full aspect-square object-cover rounded-[12px] block bg-[#DDD6C6]"
                />
              </div>
              <img
                src="/images/story-3-quince.jpg"
                alt="어르신께서 내어주신 노란 모과"
                className="w-full aspect-[16/10] object-cover rounded-[12px] block mb-[14px] bg-[#DDD6C6]"
              />
              <p className="m-0 mb-3">
                “이것 봐라, 감도 익고 사과도 익었네. 모과도 좀 따 가!”
              </p>
              <p className="m-0 mb-3">
                어르신을 댁 안까지 안전하게 모셔다드리는 길, 어르신들의 사랑은 마당에서도 이어집니다. 잘 익은 단감, 노란 모과, 탐스러운 사과를 보시며 뭐 하나라도 더 손에 쥐여주고 싶어 하시는 그 마음이 얼마나 감사한지 모릅니다.
              </p>
              <p className="m-0 mb-3">
                어르신께서 선뜻 내어주신 모과 덕분에, 지금 저희 송영 차량 안에는 향긋하고 달콤한 모과향이 가득하답니다.
              </p>
              <p className="mt-5 mb-0 px-[18px] py-4 rounded-[12px] bg-[#FBF8F2] font-serif text-[16px] leading-[1.75] text-[#1B3A2B]">
                어르신들을 모시러 다니는 평범한 일상 속에서, 오히려 제가 더 많은 정을 받고 있는 것 같습니다.
              </p>
            </div>
          </div>

          <button
            type="button"
            id="story-toggle"
            aria-controls="story-more"
            aria-expanded={isStoryOpen}
            onClick={handleToggleStory}
            className="flex items-center justify-center gap-[6px] w-full min-h-[48px] mt-[18px] border-[1.5px] border-[#23533D] rounded-[12px] bg-white text-[#23533D] font-sans text-[15px] font-bold cursor-pointer"
          >
            <span>{isStoryOpen ? '이야기 접기' : '이야기 더 읽기'}</span>
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${isStoryOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </section>

        {/* 시설 사진 */}
        <section className="py-10 px-5 bg-white border-t border-[#E6DFD0]">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">시설 사진</p>
          <h2 className="m-0 mb-5 text-[22px] leading-[1.4] font-bold text-[#1B3A2B]">
            어르신들이 머무실 공간입니다
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {FACILITY_PHOTOS.map((item) => (
              <figure key={item.src} className="m-0">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-[4/3] object-cover rounded-[12px] block bg-[#CFC8B6]"
                />
                <figcaption className="mt-2 text-[15px] font-bold text-[#1F2A24]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 활동 사진 */}
        <section className="py-10 px-5 border-t border-[#E6DFD0]">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">활동 사진</p>
          <h2 className="m-0 mb-5 text-[22px] leading-[1.4] font-bold text-[#1B3A2B]">
            함께 웃는 사계절의 하루
          </h2>
          <div className="grid grid-cols-2 gap-x-[10px] gap-y-[14px]">
            {ACTIVITY_PHOTOS.map((item) => (
              <figure key={item.src} className="m-0">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full aspect-[4/3] object-cover ${item.objectPositionClass} rounded-[10px] block bg-[#D8D1BF]`}
                />
                <figcaption className="mt-[6px] text-[14px] font-bold text-[#1F2A24]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 식사 */}
        <section className="py-10 px-5 bg-white border-t border-[#E6DFD0]">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">식사</p>
          <h2 className="m-0 mb-[6px] text-[22px] leading-[1.4] font-bold text-[#1B3A2B]">
            매일 직접 지어 드리는 따뜻한 한 끼
          </h2>
          <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[#5C574B]">
            센터 조리실에서 밥과 국, 반찬을 매일 새로 만들어 드립니다.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {MEAL_PHOTOS.map((meal, index) => (
              <button
                key={meal.src}
                type="button"
                onClick={() => setSelectedMeal(meal)}
                aria-label={`센터 점심 식단 ${index + 1} 크게 보기`}
                className="w-full aspect-[4/3] overflow-hidden rounded-[10px] block bg-[#E6DFD0] p-0 border-0 cursor-pointer"
              >
                <img
                  src={meal.src}
                  alt={`센터 점심 식단 ${index + 1}`}
                  className={`w-full h-full object-cover block ${meal.imgClass}`}
                />
              </button>
            ))}
          </div>
        </section>

        {/* 센터 소식 (블로그) */}
        <section className="py-10 px-5 bg-white border-t border-[#E6DFD0]">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">센터 소식</p>
          <h2 className="m-0 mb-[6px] text-[22px] leading-[1.4] font-bold text-[#1B3A2B]">
            블로그에 올린 이야기
          </h2>
          <p className="m-0 mb-4 text-[15px] text-[#5C574B]">
            누르면 네이버 블로그 글로 이동합니다.
          </p>
          <div className="flex flex-col gap-2">
            {BLOG_POSTS.map((post) => (
              <a
                key={post.num}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[14px] min-h-[64px] px-4 py-3 border border-[#E6DFD0] rounded-[12px] bg-[#FBF8F2] text-[#1F2A24] hover:text-[#163829] no-underline"
              >
                <span className="shrink-0 font-serif text-[18px] font-bold text-[#C98A1B]">
                  {post.num}
                </span>
                <span className="flex-1 min-w-0 text-[16px] font-medium">{post.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </div>
          <a
            href="https://blog.naver.com/ochang4season"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-[48px] mt-[14px] border-[1.5px] border-[#23533D] rounded-[12px] font-bold text-[15px] text-[#23533D] hover:text-[#163829] no-underline"
          >
            블로그 전체 보기
          </a>
        </section>

        {/* 보호자님께 드리는 팁 */}
        <section className="py-11 px-5 bg-[#F4EEE1] border-t border-[#E6DFD0]">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">보호자님께 드리는 팁</p>
          <h2 className="m-0 mb-[6px] text-[22px] leading-[1.4] font-bold text-[#1B3A2B]">
            부모님께는 이렇게 말씀드려 보세요
          </h2>
          <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[#5C574B]">
            “주간보호”라는 말이 낯설어 거절하시는 경우가 많습니다.
          </p>
          <ol className="m-0 p-0 list-none border-t border-[#DCD3C0]">
            <li className="flex gap-4 items-start py-[18px] border-b border-[#DCD3C0]">
              <span className="shrink-0 basis-8 h-8 rounded-full bg-[#23533D] text-white flex items-center justify-center text-[15px] font-bold">
                1
              </span>
              <div className="min-w-0">
                <p className="m-0 mb-1 text-[17px] font-bold text-[#1F2A24]">
                  이름을 바꿔 말씀드리세요
                </p>
                <p className="m-0 text-[15px] leading-[1.65] text-[#4A5650]">
                  “노인복지관”, “노인복지센터”라고 하시면 훨씬 편하게 받아들이십니다.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start py-[18px] border-b border-[#DCD3C0]">
              <span className="shrink-0 basis-8 h-8 rounded-full bg-[#23533D] text-white flex items-center justify-center text-[15px] font-bold">
                2
              </span>
              <div className="min-w-0">
                <p className="m-0 mb-1 text-[17px] font-bold text-[#1F2A24]">선택권을 드리세요</p>
                <p className="m-0 text-[15px] leading-[1.65] text-[#4A5650]">
                  “딱 3개월만 다녀보시고, 싫으시면 그만두셔도 돼요.”
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-6 mb-0 font-serif text-[18px] leading-[1.6] font-bold text-[#1B3A2B] text-center">
            그 3개월 동안, 저희가 반드시
            <br />
            어르신의 마음을 붙잡겠습니다.
          </p>
        </section>

        {/* 상담 문의 */}
        <section className="py-12 px-5 bg-[#1B3A2B] text-white text-center">
          <p className="m-0 mb-[10px] text-[14px] font-bold text-[#E3B04B]">상담 문의</p>
          <h2 className="m-0 mb-3 font-serif text-[26px] leading-[1.4] font-bold">
            혼자 고민하지 마시고
            <br />
            전화 한 통 주세요
          </h2>
          <p className="m-0 mb-7 text-[16px] leading-[1.7] text-[#D9E3DC]">
            등급, 비용, 송영 지역까지
            <br />
            무엇이든 편하게 물어보세요.
          </p>
          <a
            href="tel:0432164120"
            className="block py-[22px] px-4 rounded-[16px] bg-white text-[#1B3A2B] no-underline"
          >
            <span className="block text-[14px] font-medium text-[#5C574B]">
              평일 · 주말 상담 가능
            </span>
            <span className="block mt-1 text-[32px] font-bold tracking-[0.5px] text-[#1B3A2B]">
              043-216-4120
            </span>
            <span className="inline-flex items-center gap-[6px] mt-[10px] px-4 py-2 rounded-full bg-[#23533D] text-white text-[15px] font-bold">
              <PhoneIcon size={16} strokeWidth={2.2} />
              눌러서 바로 전화하기
            </span>
          </a>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="py-[14px] px-[6px] rounded-[12px] bg-[#24493A] text-[14px] leading-[1.45] text-[#E4ECE6]">
              등급 신청
              <br />
              <strong className="text-white">무료 도움</strong>
            </div>
            <div className="py-[14px] px-[6px] rounded-[12px] bg-[#24493A] text-[14px] leading-[1.45] text-[#E4ECE6]">
              등록 안 해도
              <br />
              <strong className="text-white">상담 환영</strong>
            </div>
            <div className="py-[14px] px-[6px] rounded-[12px] bg-[#24493A] text-[14px] leading-[1.45] text-[#E4ECE6]">
              댁 앞까지
              <br />
              <strong className="text-white">송영 차량</strong>
            </div>
          </div>
        </section>

        {/* 오시는 길 */}
        <section className="py-10 px-5 bg-white">
          <p className="m-0 mb-2 text-[14px] font-bold text-[#23533D]">오시는 길</p>
          <p className="m-0 mb-1 text-[18px] font-bold text-[#1B3A2B]">사계절 주간보호센터</p>
          <p className="m-0 mb-4 text-[16px] leading-[1.6] text-[#33403A]">
            충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호
          </p>
          <dl className="m-0 mb-5 p-4 rounded-[12px] bg-[#FBF8F2] border border-[#E6DFD0] grid grid-cols-[auto_1fr] gap-x-4 gap-y-[10px] text-[15px] leading-[1.5]">
            <dt className="font-bold text-[#23533D]">송영 지역</dt>
            <dd className="m-0 text-[#33403A]">오창 · 옥산 · 오송 · 청원구</dd>
            <dt className="font-bold text-[#23533D]">상담</dt>
            <dd className="m-0 text-[#33403A]">평일 · 주말 가능</dd>
          </dl>
          <a
            href="https://map.naver.com/p/search/%EC%82%AC%EA%B3%84%EC%A0%88%20%EC%A3%BC%EA%B0%84%EB%B3%B4%ED%98%B8%EC%84%BC%ED%84%B0%20%EC%98%A4%EC%B0%BD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 min-h-[48px] border-[1.5px] border-[#23533D] rounded-[12px] text-[15px] font-bold text-[#23533D] hover:text-[#163829] no-underline"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            네이버 지도에서 보기
          </a>
        </section>

        {/* 푸터 */}
        <footer className="pt-6 px-5 pb-7 bg-[#142C20] text-[#B9C7BE] text-[13px] leading-[1.7] text-center">
          <p className="m-0 font-bold text-white">사계절 주간보호센터 · 대표 김혜리</p>
          <p className="m-0">충북 청주시 청원구 오창읍 과학산업3로 202-7, 3층 302호</p>
          <p className="m-0">상담 043-216-4120</p>
        </footer>

        {/* 하단 고정 빠른 상담 바 */}
        <nav
          aria-label="빠른 상담"
          className="sticky bottom-0 z-10 grid grid-cols-[1.6fr_1fr] gap-2 pt-[10px] px-3 pb-[calc(10px+env(safe-area-inset-bottom))] bg-[rgba(20,44,32,0.97)] shadow-[0_-4px_16px_rgba(0,0,0,0.18)]"
        >
          <a
            href="tel:0432164120"
            className="flex items-center justify-center gap-2 min-h-[52px] rounded-[12px] bg-[#E3B04B] text-[#1B3A2B] text-[17px] font-bold no-underline"
          >
            <PhoneIcon size={18} strokeWidth={2.2} />
            전화 상담
          </a>
          <a
            href="sms:0432164120"
            className="flex items-center justify-center gap-2 min-h-[52px] rounded-[12px] border-[1.5px] border-[#8FAE9C] text-white text-[16px] font-bold no-underline"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            문자 상담
          </a>
        </nav>
      </div>

      {/* 식판 사진 확대 모달 */}
      {selectedMeal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="식단 사진 크게 보기"
          onClick={() => setSelectedMeal(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[460px]"
          >
            <button
              type="button"
              onClick={() => setSelectedMeal(null)}
              aria-label="닫기"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/95 text-[#1B3A2B] flex items-center justify-center border-0 cursor-pointer shadow-md"
            >
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full aspect-[4/3] overflow-hidden rounded-[12px] bg-[#E6DFD0] shadow-2xl">
              <img
                src={selectedMeal.src}
                alt="센터 점심 식단 확대 사진"
                className={`w-full h-full object-cover block ${selectedMeal.imgClass}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
