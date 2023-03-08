import React, { Component } from 'react'
import BoxOptin from './box options/BoxOptin'
import ShowScor from './show scor/ShowScor'

export default class Quiz extends Component {
     constructor(props) {
          super(props)
          this.state = {
               questions: [
                    { id: 1, questionSrc: { img: "https://paadars.com/files/testimg/9/riazi9fasl5s6.png" }, options: [{ value: "-1", isCorrect: false }, { value: "1", isCorrect: true }, { value: "-4", isCorrect: false }, { value: "4", isCorrect: false },] },
                    { id: 2, questionSrc: { textQuestion: 'مثلث متساوی الاضلاع ABC به ضلع 1.5 سانتی متر است.میخواهیم مثلثی بزرگ تر و متشابه با مثلث ABC رسم کنیم که نسبت این دو مثلث 1/3 باشد،اندازه ضلع مثلث بزرگ تر چقدر است؟' }, options: [{ value: "3.5", isCorrect: false }, { value: "6.5", isCorrect: false }, { value: "4.5", isCorrect: true }, { value: "9.5", isCorrect: false },] },
                    { id: 3, questionSrc: { img: "https://paadars.com/files/testimg/9/riazi9fasl5s3.png" }, options: [{ value: "2", isCorrect: true }, { value: "3", isCorrect: false }, { value: "5", isCorrect: false }, { value: "-1", isCorrect: false },] },
                    { id: 4, questionSrc: { img: "https://paadars.com/files/testimg/9/riazi9fasl5s7.png" }, options: [{ value: "1", isCorrect: false }, { value: "-1", isCorrect: true }, { value: "13", isCorrect: false }, { value: "-13", isCorrect: false },] },
                    { id: 5, questionSrc: { textQuestion: "زاویه بین دو خط y=-5 , x=2   کدام است؟" }, options: [{ value: "45 درجه", isCorrect: false }, { value: "120 درجه", isCorrect: false }, { value: "180 درجه", isCorrect: false }, { value: "90  درجه", isCorrect: true },] },
                    { id: 6, questionSrc: { textQuestion: "در نمایش اعشاری کسر 7/22  مجموع رقم های بیستم و پنجاهم بعد از ممیز کدام است؟" }, options: [{ value: "2", isCorrect: false }, { value: "11", isCorrect: false }, { value: "16", isCorrect: true }, { value: "9", isCorrect: false },] },
                    { id: 7, questionSrc: { textQuestion: "کدام کسر نمایش اعشاری متناوب مرکب را دارد؟" }, options: [{ value: "1/3", isCorrect: false }, { value: "3/5", isCorrect: false }, { value: "7/6", isCorrect: true }, { value: "3/8", isCorrect: false },] },
                    { id: 8, questionSrc: { textQuestion: "ساده شده عبارت رو به رو کدام گزینه است؟      √98-√50+√128-4√2=?" }, options: [{ value: "√8", isCorrect: false }, { value: "2√2-√2", isCorrect: false }, { value: "√2-√2", isCorrect: false }, , { value: "2√2", isCorrect: true }] },
                    { id: 9, questionSrc: { img: "https://paadars.com/files/testimg/9/riazi9f4s12.png" }, options: [{ value: "-20", isCorrect: true }, { value: "4", isCorrect: false }, { value: "-85", isCorrect: false }, { value: "17", isCorrect: false },] },
                    { id: 10, questionSrc: { img: "https://s2.uupload.ir/files/photocache_1677750533523_6ua.jpg" }, options: [{ value: "-3", isCorrect: false }, { value: "1", isCorrect: false }, { value: "2", isCorrect: false }, { value: "4", isCorrect: true },] },
               ],
               isLogin: false,
               showError: false,
               userNameAcoount: "",
               counterQuestion: 0,
               showScors: false,
               score: 0

          }
          this.trueOrFalse = this.trueOrFalse.bind(this)
          this.showAgin = this.showAgin.bind(this)
          this.onChangeValueUserName = this.onChangeValueUserName.bind(this)
     }

     showAgin() {
          this.setState({
               counterQuestion: 0,
               showScors: false,
               score: 0
          })
     }

     trueOrFalse(isCorrect) {
          if (isCorrect) {
               this.setState(prevState => {
                    return {
                         score: prevState.score + 1
                    }
               })
          }
          if (this.state.counterQuestion < 9) {
               this.setState(prevState => {
                    return {
                         counterQuestion: prevState.counterQuestion + 1
                    }
               })
          } else {
               this.setState({
                    showScors: true
               })
          }
     }

     onChangeValueUserName(e) {
          this.setState({
               userNameAcoount: e.target.value
          });

          if (this.state.userNameAcoount === "" || this.state.userNameAcoount.length < 2) {
               this.setState({
                    showError: true
               })
          } else {
               this.setState({
                    showError: false,
               })
          }
     }

     validationForm(e) {
          e.preventDefault()


          if (this.state.userNameAcoount.length > 2) {
               this.setState({
                    isLogin: true
               })
          } else {
               this.setState({
                    showError: true
               })
          }
     }

     render() {
          return (
               <div className='w-full'>
                    {this.state.showScors ? (
                         <ShowScor reload={this.showAgin} score={this.state.score} userNameAcoount={this.state.userNameAcoount} length={this.state.questions.length} />
                    ) : (
                         <div>
                              {this.state.isLogin ? (
                                   <div className='flex w-full' >
                                        <div className='bg_ w-[45%] xl:block hidden'>

                                        </div>
                                        <div className='h-screen xl:w-[55%] w-full flex flex-col justify-around p-4'>
                                             <div className='bg-white h-1/4 flex p-2 justify-center text-[19px] items-center rounded-md pointer-events-none'>
                                                  {this.state.questions[this.state.counterQuestion].questionSrc.img ? (
                                                       <img src={this.state.questions[this.state.counterQuestion].questionSrc.img} className="max-h-full" alt="" />
                                                  ) : (
                                                       <p>{this.state.questions[this.state.counterQuestion].questionSrc.textQuestion}</p>
                                                  )
                                                  }
                                             </div>
                                             <div className="flex justify-center flex-wrap gap-4 ">
                                                  {
                                                       this.state.questions[this.state.counterQuestion].options.map(option => (
                                                            <BoxOptin key={option.id} value={option.value} isCorrect={option.isCorrect} click={this.trueOrFalse}></BoxOptin>
                                                       ))
                                                  }
                                             </div>
                                        </div>
                                   </div>
                              ) : (
                                   <div className='h-screen flex justify-end bgs p-10  items-center'>
                                        <div className='min-w-[450px] bg-[#313241] rounded-lg  border-[#47404052] border-solid border-[1px] flex flex-col items-center p-5'>
                                             <div className='text-center text-[25px] text-white  mb-8'>
                                                  نام خود را وارد کنید
                                             </div>
                                             <form action="#" onSubmit={(e) => this.validationForm(e)} className='w-full flex flex-col items-center' >
                                                  <input type="text" placeholder='نام شما...' className='outline-none input rounded-lg pr-4 pl-4 pb-3 pt-3 min-w-[85%] text-white bg-transparent' value={this.state.value} onChange={(e) => this.onChangeValueUserName(e)} />
                                                  {this.state.showError &&
                                                       <span className='text-red-500 mt-2'>تعداد کاراتر های نام شما باید بیشتر از دو کاراکتر باشد !</span>
                                                  }
                                                  <button type="submit" className='mt-10 bg-blue-500 hover:bg-blue-700 h-[45px] w-full text-white rounded-md text-[18px]'>شروع آزمون</button>
                                             </form>
                                        </div>
                                   </div>
                              )}
                         </div>
                    )}
               </div>
          )
     }
}
