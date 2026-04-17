// menuData.js - 모든 메뉴 데이터를 관리하는 모듈입니다.

/**
 * 메뉴 데이터 구조:
 * Key: 탭 버튼 data-tab 값과 일치해야 함 (음료, 쌀빵)
 * Value: 메뉴 아이템 배열 또는 하위 카테고리 객체 (subs)
 */
const menuData = {
  '음료': {
    subs: {
      'COFFEE': [
        { name: '에스프레소', price: 2500, categoryId: 'drinks' },
        { name: '아메리카노', price: 2500, categoryId: 'drinks' },
        { name: '카푸치노', price: 3500, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '카페 라떼', price: 3500, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '바닐라 라떼', price: 4500, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '디카페인 콜드브루', price: 3500, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '디카페인 콜드브루 라떼', price: 4500, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '샷 추가', price: 500, description: '커피매뉴 1샷 추가', categoryId: 'drinks' }
      ],
      'NON COFFEE': [
        { name: '녹차 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '초코 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '곡물 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '생강라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '생딸기라떼', price: 6000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '녹차 팥 스무디', price: 6000, description: '녹차와 팥의 조화', categoryId: 'drinks' },
        { name: '딸기 스무디', price: 5000, description: '딸기 현leur', categoryId: 'drinks' },
        { name: '망고 스무디', price: 5000, description: '망고 과일', categoryId: 'drinks' },
        { name: '생딸기 요거트', price: 6000, description: '생딸기 요거트', categoryId: 'drinks' },
        { name: '블루베리 요거트', price: 6000, description: '블루베리 요거트', categoryId: 'drinks' },
        { name: '그래놀라 요거트', price: 6000, description: '그래놀라 요거트', categoryId: 'drinks' }
      ],
      'TEA & ADE': [
        { name: '박하', price: 3000, description: '清凉한 박하차', categoryId: 'drinks' },
        { name: '루이보스', price: 3000, description: '무카페인 루이보스', categoryId: 'drinks' },
        { name: '우엉', price: 5000, description: '우엉.root 차', categoryId: 'drinks' },
        { name: '얼그레이', price: 5000, description: '베리향 차', categoryId: 'drinks' },
        { name: '오미자', price: 5000, description: '酸味 오미자차', categoryId: 'drinks' },
        { name: '레몬', price: 5000, description: '레몬 에이드', categoryId: 'drinks' }
      ]
    }
  },
  '쌀빵': {
    subs: {
      '식빵': [
        { name: '플레인 식빵', price: 4000, description: '기본 중의 기본, 부드러운 식빵', categoryId: 'bakery' },
        { name: '호두 크랜베리 식빵', price: 5800, description: '호두와 건크랜베리를 넣은 식빵', categoryId: 'bakery' },
        { name: '체다 치즈 식빵', price: 6500, description: '짭조름한 체다 치즈가 들어간 식빵', categoryId: 'bakery' },
        { name: '블루베리 잼 식빵', price: 6300, description: '달콤한 블루베리잼을 바른 식빵', categoryId: 'bakery' },
        { name: '사과 잼 식빵', price: 6500, description: '상큼한 사과잼을 바른 식빵', categoryId: 'bakery' },
        { name: '시나몬 견과 식빵', price: 6300, description: '시나몬 향과 견과류의 조화', categoryId: 'bakery' }
      ],
      '바게트': [
        { name: '플레인 바게트', price: 4000, description: '쫄깃하고 바삭한 기본 바게트', categoryId: 'baguette' },
        { name: '치즈 바게트', price: 5500, description: '짭조름한 녹인 치즈가 올라간 바게트', categoryId: 'baguette' },
        { name: '들깨 바게트', price: 4500, description: '고소한 들깨가 가득한 바게트', categoryId: 'baguette' },
        { name: '호두크랜베리 바게트', price: 4800, description: '호두와 건크랜베리가 들어간 바게트', categoryId: 'baguette' },
        { name: '무화과 바게트', price: 5300, description: '달콤한 무화과가 가득한 바게트', categoryId: 'baguette' }
      ],
      '디저트': [
        { name: '모닝빵', price: 500, description: '간단한 간식용 모닝빵', categoryId: 'desserts' },
        { name: '단팥빵', price: 2500, description: '달콤한 단팥이 가득한 빵', categoryId: 'desserts' },
        { name: '구운호떡', price: 2500, description: '갓 구운 달콤한 호떡', categoryId: 'desserts' },
        { name: '비건버터 소금빵', price: 2500, description: '담백한 비건 버터 소금빵', categoryId: 'desserts' },
        { name: '바질 소금빵', price: 2500, description: '향긋한 바질과 소금이 어우러진 소금빵', categoryId: 'desserts' },
        { name: '레몬 파운드케이크', price: 3000, description: '상큼한 레몬 향의 파운드케이크', categoryId: 'desserts' },
        { name: '튀일 3개', price: 3000, description: '바삭하고 섬세한 튀일 3개 세트', categoryId: 'desserts' }
      ]
    }
  },
  '선물': {
    subs: {
      '드립백': [
        { name: '디카페인 드립백', price: 7000, description: '5개입 1박스', categoryId: 'gift' },
        { name: '드립백', price: 5000, description: '5개입 1박스', categoryId: 'gift' }
      ]
    }
  }
};