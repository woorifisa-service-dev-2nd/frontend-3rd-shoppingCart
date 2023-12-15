![header](https://capsule-render.vercel.app/api?type=slice&color=auto&height=300&section=header&text=Shopping%20Cart&fontSize=90)




#  장바구니 페이지
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-shoppingCart/assets/79794772/2b542f28-2a7a-4648-9b8f-c92fed8cf859)


# 1.프로젝트 및 팀(팀원) 소개 
### 🤵박재현
### 👩‍💼윤이솔
### 👩‍🎓임다빈

---

# 2. 협업 방식 👩‍👦‍👦
- GitHub
- Slack
- 기본적인 틀의 경우 각자 만든 이후 한가지를 채택 후 기능 개발 실시 

---
  
# 3. 기능 시연 💻

---

# 4. 도메인 용어 정의 📒
| 폴더 | 설명 |
| --------- | --------------------------------------------------------------- |
| main |  값: Header와 Body부분에 대하여 분리한 폴더 |
| shoppingCart | 기능적인 부분에 대한 컴포넌트가 들어가있는 폴더 |
| ui | 버튼과 모달의 컴포넌트가 들어가 있는 폴더 |
| context | 추후에 추가 될것을 고려하여 context파일 분리 <br /> cartContext내에서 각각의 context를 준비 |

| 함수 | 설명 |
| --------- | --------------------------------------------------------------- |
| CartItem () |  메인 창에서 한번에 여러 수량을 넣기 위해 세팅 하는 부분 |
| addEvent () | 장바구니에 원하는 수량만큼 추가하는 함수 |
| deleteEvent  () | 장바구니에 있는 상품을 제거하는 함수 |
| calculateSubtotal  () | 장바구니에 담긴 상품들의 총 가격을 계산해서 보내주는 함수 |
| dispatch  () |  추가기능과 제거 기능에 관하여 상황에 맞게 리턴해주는 함수 |



---
 
# 5. 핵심 기능 설명 및 구현 방법 📃

## 장바구니 메인 페이지 구현
### - 1.Itemlist에 있는 물품의 수량을 -와+를 사용해 설정.
### - 1-1.itemlist는 app.jsx에서 dummydata(cart)로 관리.

```react
const CartItem = ({isMain, cart}) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-white rounded-md shadow-xl">
        
        <div className="flex items-center">
              <img src={cart.img} alt="" className="w-32 h-32 mr-4" />
          <div>
            <h2 data-test="title" className="mb-0 text-lg font-bold text-black uppercase">{cart.product}</h2>
            <p className="mb-0 text-lg text-black">{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          </div>
        </div>
            
        
        <div className="flex items-center gap-1">
            {isMain && <CustomNumberInput value={value} decrement={decrement} increment={increment}></CustomNumberInput>}
            {isMain && <IconButton icon={'🛒'} onClick={addEvent}/>}

            {!isMain && <div className="mb-0 text-lg font-bold text-black uppercase">{cart.count}</div>}
            {!isMain && <IconButton textColor='text-red-300' icon={'🗑'} onClick={deleteEvent}/>}
        </div>
    </li>
  )
}
```

### - 2.카트 아이콘을 클릭해 장바구니에 담고 모달을 통해 확인.
### - 2-1.수량선택 0일 경우 alert을 이용해 수량 선택을 알림.
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-shoppingCart/assets/79794772/e958d1d1-060c-4d11-b77a-cde0f8f61ee8)

### - 2-2. 수량 선택 후 장바구니 버튼 클릭 시 어떤 상품이 추가되었는지 alert를 통해 알림.
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-shoppingCart/assets/79794772/9783a92c-9c69-4c36-b41e-7eb47405850c)


### - 3. cart 버튼을 눌러 장바구니 item 목록을 모달창을 통해 확인.
```react
const ShoppingBody = () => {
    const [carts, openModal, closeModal, isOpen] =  useContext(CartContext);

  return (
    <div className='max-w-xl mx-auto min-w-[20rem]'>

            <div className='flex justify-end'>
            <button className="inline-flex items-center rounded-md text-xl  bg-indigo-600 shadow-sm hover:bg-indigo-700 px-5 py-2 text-white ring-1 ring-inset ring-gray-500/10" onClick={openModal}>Cart</button>
            </div>
            

              <section>
                <CartBody isMain={true}></CartBody>
              </section>
            
            {isOpen && createPortal(
            <Modal>
              <CartForm isMain={false}></CartForm>
            </Modal>, document.body)}

          </div>
  )
}

```

### - 3-1.장바구니에 담는 기능과 삭제하는 기능은 App.jsx의 reducer(dispatch)로 관리.
```react
const dispatch = useContext(CartDispatchContext);

    const addEvent = ()=>{
      if(value === 0){
        alert('수량을 추가해주세요');
      }
      else{
        dispatch({type:"ADD", addCart:{
            id: cart.id,
            product: cart.product,
            count: cart.count+value,
            price: cart.price,
            img: cart.img
        }});

        setValue(0);

        alert(`상품 ${cart.product}이 추가되었습니다.`);
      }

    }
    const deleteEvent = ()=>{
        dispatch({type:"DELETE", deleteCart:{
            id: cart.id,
            product: cart.product,
            count: 0,
            price: cart.price,
            img: cart.img
        }})

        
    }
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-white rounded-md shadow-xl">
        
        <div className="flex items-center">
              <img src={cart.img} alt="" className="w-32 h-32 mr-4" />
          <div>
            <h2 data-test="title" className="mb-0 text-lg font-bold text-black uppercase">{cart.product}</h2>
            <p className="mb-0 text-lg text-black">{cart.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          </div>
        </div>
            
        
        <div className="flex items-center gap-1">
            {isMain && <CustomNumberInput value={value} decrement={decrement} increment={increment}></CustomNumberInput>}
            {isMain && <IconButton icon={'🛒'} onClick={addEvent}/>}

            {!isMain && <div className="mb-0 text-lg font-bold text-black uppercase">{cart.count}</div>}
            {!isMain && <IconButton textColor='text-red-300' icon={'🗑'} onClick={deleteEvent}/>}
        </div>
    </li>
  )
```

### - 3-2.modal은 contextAPI를 사용해 관리.
```react
const [carts, dispatch] = useReducer(reducer, dummyData);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);

  return (
    <div>
      <ShoppingHeader/>
      
        <CartContext.Provider value={[carts, openModal, closeModal, isOpen]}>
          <CartDispatchContext.Provider value = {dispatch}>
          <ShoppingBody/>
          </CartDispatchContext.Provider>
        </CartContext.Provider>
    </div>
  )
```

### - 3-3.장바구니에 담긴 item들의 총 금액을 계산해주는 기능.
```react
const Subtotal = () => {
  const [carts, openModal, closeModal] = useContext(CartContext);

  const calculateSubtotal = () => {
    return carts.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Order Total</p>
      <p>{`${calculateSubtotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</p>
    </div>
    <div className="mt-6">
      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
    </div>
    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        
        <button type="button" onClick={closeModal} className="font-medium text-indigo-600 hover:text-indigo-500">
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  </div>
  );
};
```
---

# 6. 트러블 슈팅 💢
### 1. 모달창 종료 후 메인창이 새로고침 되는 현상 발생.<br />
 - app.js에서 useState를 통해 생성한 openModal, closeModal함수를 Context로 전달해 사용하여 문제 해결

### 2. children과 startsWith 함수를 사용하여 CartItem의 장바구니 추가/삭제버튼을 메인창과 모달창에서 따로 컨트롤하지 못하는 현상 발생.<br />
 - isMain 변수가 true인지 false인지를 CartBody와 CartForm에 인자값으로 전달하여 문제 해결
 - 1의 문제 때문에 실행이 안되었던 것으로 현재는 해당 코드로 실행시켜도 정상 작동할 것으로 생각됨

### 3. 저장소에 git push시 github 에러 The requested URL returned error: 403 발생.<br />
 - 토큰 관련 문제를 확인 후 프로젝트의 저장소 주소를 가져온 뒤 github의 생성된 토큰과 주소를 합쳐 세팅을 통해 해당 문제를 해결
   

---
  
# 7. 팀원 회고(느낀점)😲
- 박재현 - 다시한번 React에 대해 복습할수있는 시간이라 좋았고 ContextAPI의 좋은 점을 확실히 느끼는 프로젝트였습니다.
- 윤이솔 - contextAPI와 reducer에 대해 이해할 수 있는 프로젝트였습니다.
- 임다빈 - 

