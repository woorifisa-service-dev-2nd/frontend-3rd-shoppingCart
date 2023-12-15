![header](https://capsule-render.vercel.app/api?type=slice&color=auto&height=300&section=header&text=Shopping%20Cart&fontSize=90)




#  장바구니 페이지
![image](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-shoppingCart/assets/79794772/2b542f28-2a7a-4648-9b8f-c92fed8cf859)


# 1.프로젝트 및 팀(팀원) 소개 
### 🤵박재현
### 👩‍💼윤이솔
### 👩‍🎓임다빈


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

## 장바구니 페이지 구현
### - 장바구니 페이지 구현 부분입니다.

```react
const App = () => {
  const [carts, dispatch] = useReducer(reducer, dummyData);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);

  return (
    <div>
      <header>
        <div className="flex justify-center">
          <a to="/">
            <h1 className='animate-spin-slow py-8 text-black max-w-max text-7xl'>Shopping List</h1>
          </a>
        </div>
      </header>
      
        <CartContext.Provider value={[carts, openModal, closeModal]}>
          <CartDispatchContext.Provider value = {dispatch}>
          <div className='max-w-xl mx-auto min-w-[20rem]'>

            <div className='flex justify-end'>
            <button className="inline-flex items-center rounded-md text-xl font-semibold  bg-blue-600 px-5 py-2 text-white ring-1 ring-inset ring-gray-500/10" onClick={openModal}>Cart</button>
            </div>
            

              <section>
                <CartBody isMain={true}></CartBody>
              </section>
            
            {isOpen && createPortal(
              <Modal>
              <CartForm isMain={false}></CartForm>
            </Modal>, document.body)}

          </div>
          </CartDispatchContext.Provider>
        </CartContext.Provider>
    </div>
  )
}
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
- 박재현 - 
- 윤이솔 - contextAPI와 reducer에 대해 이해할 수 있는 프로젝트였습니다.
- 임다빈 - 

