import React, { Component } from 'react'

export default class BoxOptin extends Component {
     render() {

          let { value, click, isCorrect } = this.props

          return (
               <div onClick={() => click(isCorrect)} className="bg-white hover:drop-shadow-xl ltr h-[150px] w-[45%] md:w-[40%] text-[17px]  cursor-pointer rounded-md flex justify-center hover:text-white hover:bg-blue-500 hover:translate-y-[-2px] hover:translate-x-[-2px] items-center">
                    {value}
               </div>
          )
     }
}
