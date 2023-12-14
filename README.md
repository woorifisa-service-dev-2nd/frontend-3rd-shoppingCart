![header](https://capsule-render.vercel.app/api?type=slice&color=auto&height=300&section=header&text=Shopping%20Cart&fontSize=90)


주제 : 장바구니 페이지

#  장바구니 페이지


# 1.프로젝트 및 팀(팀원) 소개 
### 🤵박재현
### 👩‍💼윤이솔
### 👩‍🎓임다빈


# 2. 협업 방식 👩‍👦‍👦
- 

---
  
# 3. 기능 시연 💻
요구사항

  
---

# 4. 도메인 용어 정의 📒
| 도메인 | 설명 |
| --------- | --------------------------------------------------------------- |
| 변수 |  값: ,<br /> 값2: ,<br /> |
| 함수() | 함수설명,<br /> 매개변수 설명 |


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
### 1. 문제점 첫번째.<br />
 - 원인 및 해결 방안
   
  


---
  
# 8. 팀원 회고(느낀점)😲
- 박재현 - 
- 윤이솔 -
- 임다빈 - 

