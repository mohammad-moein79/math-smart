import React, { Component } from 'react'

export default class ShowScor extends Component {
     constructor(props) {
          super(props)

          this.state = {
               addClassInfo: false
          }

          this.hi = this.hi.bind(this)
          this.toggleClass = this.toggleClass.bind(this)
     }

     toggleClass() {
          this.setState({
               addClassInfo: true
          })

          setTimeout(() => {
               this.setState({
                    addClassInfo: false
               })
          }, 25000);
     }

     hi() {
          this.props.reload()
     }

     render() {
          let { length, score, userNameAcoount } = this.props
          return (
               <div className='bg_  w-full flex md:justify-end justify-center items-center '>
                    <div className='relative h-screen ml-4 flex items-center ' >
                         <div className='flex items-center justify-between p-3 bg-[#313241] gap-6 min-h-[250px] md:min-w-[700px] min-w-[450px] rounded-lg'>
                              <div className='flex flex-col justify-between min-h-[330px] md:w-[55%]  w-full'>
                                   <div className=''>
                                        {score <= (length - 10) ? (
                                             <h2 className='text-red-500 text-[28px] font-medium'>
                                                  شما موفق نشدید !
                                             </h2>
                                        ) : (
                                             <h2 className='text-green-500 text-[28px] font-medium'>
                                                  شما برنده شدید !
                                             </h2>
                                        )
                                        }
                                        <div className='text-[14px] text-blue-400'>
                                             <span>{`${userNameAcoount}`} عزیز</span>
                                             <br />
                                             <span> شما در ازمون وبسایت هوش ریاضی  {score <= (length - 10) ? ("موفق نشدید لطفا بیشتر تلاش کنید") : ("برنده شدید")} .</span>

                                        </div>
                                   </div>
                                   <div className='flex flex-col gap-4 mb-8'>
                                        <div className='flex items-center gap-4'>
                                             <img className='w-[50px]' src="https://paadars.com/themes/default/images/correct.png" alt="correct" />
                                             <div>
                                                  <h2 className='text-[#9496a1]'>پاسخ های صحیح</h2>
                                                  <h4 className='text-white'>{score} پاسخ</h4>
                                             </div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                             <img className='w-[50px]' src="https://paadars.com/themes/default/images/wrong.png" alt="wrong" />
                                             <div>
                                                  <h2 className='text-[#9496a1]'>پاسخ های غلط</h2>
                                                  <h4 className='text-white'>{(length - score)} پاسخ</h4>
                                             </div>
                                        </div>
                                   </div>
                                   <div className=''>
                                        <button onClick={this.hi} className='animate text-white text-[18px] hover:bg-blue-700 bg-blue-500 pr-4 pl-4 pt-2 pb-2 rounded-md'>شروع مجدد آزمون</button>
                                        <button className='mr-3 text-[15px] underline text-white' onClick={this.toggleClass}>دیدن اطلاعات توسعه دهنده وبسایت</button>
                                   </div>
                              </div>
                              <div className='h-full xl:w-[45%] hidden md:block'>
                                   {score <= (length - 10) ? (
                                        <img src="https://img.freepik.com/free-vector/time-administration-with-worker-hourglass_1133-273.jpg?1?w=360" className='w-[350px] rounded-xl' alt="" />
                                   ) : (
                                        <img src="https://s2.uupload.ir/files/simple-flat-design-trophy_662089-56_065t.jpg" className='w-[350px] rounded-xl' alt="" />
                                   )
                                   }
                              </div>
                         </div>
                    </div>
                    <div className={`${this.state.addClassInfo ? "showInfo" : null} border-[#47404052] border-solid border-[1px] absolute  top-10 right-[-500px]  text-white bg-blue-500 af p-3 min-w-[420px] rounded-lg`}>
                         <h2 className='text-[22px]'>اطلاعات توسعه دهنده</h2>
                         <p>نام و نام خانوادگی  : سید محمد معین حسینی تبار</p>
                         <p>متولد : 1386/11/10</p>
                         <p>محل سکونت : استان قزوین , شهر الوند</p>
                         <p>مدرسه : شهید مطهری</p>
                         <p>دبیر ریاضی : آقای دکتر رحیمی</p>
                         <p> مهارت ها : </p>
                         <ul className='mr-5'>
                              <li className='list-disc'>تسلط کامل  به HTML</li>
                              <li className='list-disc'>تسلط کامل به CSS و TailwindCSS</li>
                              <li className='list-disc'>مسلط به زبان JavaScript</li>
                              <li className='list-disc'>درحال یادگیری React.js</li>
                         </ul>
                    </div>
               </div>
          )
     }
}
