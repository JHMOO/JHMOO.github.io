// script.js - 메뉴 로직 및 초기화 스크립트
// 쌀빵 탭의 하위 탭(식빵, 바게트, 디저트) 구조가 구현됨
// 선물 탭의 하위 탭(드립백) 구조가 구현됨

var menuData = {
  '음료': {
    subs: {
      'COFFEE': [
        { name: '에스프레소', price: 2500, description: '샷 추가 +500원', categoryId: 'drinks' },
        { name: '아메리카노', price: 2500, description: '샷 추가 +500원', categoryId: 'drinks' },
        { name: '카푸치노', price: 3500, description: '두유 변경 가능 • 샷 추가 +500원', categoryId: 'drinks' },
        { name: '카페 라떼', price: 3500, description: '두유 변경 가능 • 샷 추가 +500원', categoryId: 'drinks' },
        { name: '바닐라 라떼', price: 4500, description: '두유 변경 가능 • 샷 추가 +500원', categoryId: 'drinks' },
        { name: '디카페인 콜드브루', price: 3500, description: '두유 변경 가능 • 샷 추가 +500원', categoryId: 'drinks' },
        { name: '디카페인 콜드브루 라떼', price: 4500, description: '두유 변경 가능 • 샷 추가 +500원', categoryId: 'drinks' }
      ],
      'NON COFFEE': [
        { name: '녹차 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '초코 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '곡물 라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '생강라떼', price: 5000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '생딸기라떼', price: 6000, description: '두유 변경 가능', categoryId: 'drinks' },
        { name: '녹차 팥 스무디', price: 6000, description: '', categoryId: 'drinks' },
        { name: '딸기 스무디', price: 5000, description: '', categoryId: 'drinks' },
        { name: '망고 스무디', price: 5000, description: '', categoryId: 'drinks' },
        { name: '생딸기 요거트', price: 6000, description: '', categoryId: 'drinks' },
        { name: '블루베리 요거트', price: 6000, description: '', categoryId: 'drinks' },
        { name: '그래놀라 요거트', price: 6000, description: '', categoryId: 'drinks' }
      ],
      'TEA & ADE': [
        { name: '박하', price: 3000, description: '', categoryId: 'drinks' },
        { name: '루이보스', price: 3000, description: '', categoryId: 'drinks' },
        { name: '우엉', price: 5000, description: '', categoryId: 'drinks' },
        { name: '얼그레이', price: 5000, description: '', categoryId: 'drinks' },
        { name: '오미자', price: 5000, description: '', categoryId: 'drinks' },
        { name: '레몬', price: 5000, description: '', categoryId: 'drinks' }
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

// 탭 ID 매핑
var tabToGridIdMap = {
  '음료': 'menu-drinks',
  '쌀빵': 'menu-outer-container',
  '선물': 'menu-gift'
};

// 메뉴 카드 렌더링 함수
function renderMenuItems(items, targetId) {
  var targetGrid = document.getElementById(targetId);
  if (!targetGrid) {
    console.error('Target grid not found: ' + targetId);
    return;
  }

  targetGrid.innerHTML = '';
  var cardHtml = '';

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    cardHtml += '<div class="menu-item-card">';
    cardHtml += '<div class="item-image-placeholder"></div>';
    cardHtml += '<div class="item-info">';
    cardHtml += '<h3 class="item-name">' + item.name + '</h3>';
    cardHtml += '<p class="item-desc">' + item.description + '</p>';
    cardHtml += '<div class="item-footer">';
    cardHtml += '<span class="item-price">' + item.price.toLocaleString() + '원</span>';
    cardHtml += '</div></div></div>';
  }

  targetGrid.innerHTML = cardHtml;
}

// 쌀빵 하위 탭 초기화 및 이벤트 처리
function initRiceBreadTabs() {
  var subTabBtns = document.querySelectorAll('#sub-tabs-container .sub-tab-btn');
  
  for (var i = 0; i < subTabBtns.length; i++) {
    subTabBtns[i].addEventListener('click', function() {
      var subTabName = this.getAttribute('data-sub-tab');
      
      for (var j = 0; j < subTabBtns.length; j++) {
        subTabBtns[j].classList.remove('active');
      }
      
      this.classList.add('active');
      
      var subContents = document.querySelectorAll('#menu-outer-container .sub-menu-grid');
      for (var k = 0; k < subContents.length; k++) {
        subContents[k].style.display = 'none';
        subContents[k].classList.remove('active');
      }
      
      var targetContent = document.getElementById('sub-' + subTabName);
      if (targetContent) {
        targetContent.style.display = 'grid';
        targetContent.classList.add('active');
        
        var subData = menuData['쌀빵'].subs[subTabName];
        renderMenuItems(subData, 'sub-' + subTabName);
      }
    });
  }

  var firstSubTab = document.querySelector('#sub-tabs-container .sub-tab-btn[data-sub-tab="식빵"]');
  if (firstSubTab) {
    firstSubTab.click();
  }
}

// 음료 하위 탭 초기화 및 이벤트 처리
function initDrinksTabs() {
  var subTabBtns = document.querySelectorAll('#drink-sub-tabs-container .sub-tab-btn');
  
  for (var i = 0; i < subTabBtns.length; i++) {
    subTabBtns[i].addEventListener('click', function() {
      var subTabName = this.getAttribute('data-sub-tab');
      
      for (var j = 0; j < subTabBtns.length; j++) {
        subTabBtns[j].classList.remove('active');
      }
      
      this.classList.add('active');
      
      var subContents = document.querySelectorAll('#menu-drinks .sub-menu-grid');
      for (var k = 0; k < subContents.length; k++) {
        subContents[k].style.display = 'none';
        subContents[k].classList.remove('active');
      }
      
      var targetContent = document.getElementById('drink-' + subTabName);
      if (targetContent) {
        targetContent.style.display = 'grid';
        targetContent.classList.add('active');
        
        var subData = menuData['음료'].subs[subTabName];
        renderMenuItems(subData, 'drink-' + subTabName);
      }
    });
  }

  var firstSubTab = document.querySelector('#drink-sub-tabs-container .sub-tab-btn[data-sub-tab="COFFEE"]');
  if (firstSubTab) {
    firstSubTab.click();
  }
}

// 선물 드립백 하위 탭 초기화 및 이벤트 처리
function initGiftDripBagTabs() {
  var subTabBtns = document.querySelectorAll('#gift-sub-tabs-container .sub-tab-btn');
  
  for (var i = 0; i < subTabBtns.length; i++) {
    subTabBtns[i].addEventListener('click', function() {
      var subTabName = this.getAttribute('data-sub-tab');
      
      for (var j = 0; j < subTabBtns.length; j++) {
        subTabBtns[j].classList.remove('active');
      }
      
      this.classList.add('active');
      
      var subContents = document.querySelectorAll('#menu-gift .sub-menu-grid');
      for (var k = 0; k < subContents.length; k++) {
        subContents[k].style.display = 'none';
        subContents[k].classList.remove('active');
      }
      
      var targetContent = document.getElementById('sub-dripbag');
      if (targetContent) {
        targetContent.style.display = 'grid';
        targetContent.classList.add('active');
        
        var subData = menuData['선물'].subs[subTabName];
        renderMenuItems(subData, 'sub-dripbag');
      }
    });
  }

  var firstSubTab = document.querySelector('#gift-sub-tabs-container .sub-tab-btn[data-sub-tab="드립백"]');
  if (firstSubTab) {
    firstSubTab.click();
  }
}

// 메뉴 탭 전환 함수
function setupMenuSwitcher() {
  var menuSection = document.querySelector('.menu-section#menu');
  if (!menuSection) return;

  var allGrids = document.querySelectorAll('.menu-grid');
  var allTabBtns = document.querySelectorAll('.tab-btn');

  for (var i = 0; i < allGrids.length; i++) {
    allGrids[i].style.display = 'none';
    allGrids[i].classList.remove('active');
  }

  for (var i = 0; i < allTabBtns.length; i++) {
    allTabBtns[i].addEventListener('click', function() {
      var tabName = this.getAttribute('data-tab');
      var activeGridId = tabToGridIdMap[tabName];

      for (var j = 0; j < allTabBtns.length; j++) {
        allTabBtns[j].classList.remove('active');
      }
      this.classList.add('active');

      for (var k = 0; k < allGrids.length; k++) {
        allGrids[k].style.display = 'none';
        allGrids[k].classList.remove('active');
      }

      var gridToShow = document.getElementById(activeGridId);
      if (gridToShow) {
        gridToShow.style.display = 'grid';
        gridToShow.classList.add('active');
      }

      if (tabName === '음료') {
        initDrinksTabs();
      } else if (tabName === '쌀빵') {
        initRiceBreadTabs();
      } else if (tabName === '선물') {
        initGiftDripBagTabs();
      }
    });
  }

  var initialTab = document.querySelector('.tab-btn.active');
  if (initialTab) {
    initialTab.click();
  }
}

// DOM 로드 완료 시 실행
document.addEventListener('DOMContentLoaded', function() {
  setupMenuSwitcher();

  var navbar = document.querySelector('.site-header');
  if (navbar) {
    window.onscroll = function() {
      if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(253, 251, 247, 0.98)';
      } else {
        navbar.style.background = 'rgba(253, 251, 247, 0.95)';
      }
    };
  }

  console.log('🌿 카페 이음 - 메뉴 시스템 준비 완료!');
});
