import React from 'react'
import './Stack.css'

const Stack = () => {
  return (
    <section>
        <div className='stack-container'>
           <div className='stack-1'>
            <div className='stack-1-border'>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
                <div className='stack-contents'>
                    <div className='stack-title-1'>
                        WorkFlow
                    </div>
                    <div className='stack-title'>
                        Employee Onbording Wrokflow
                    </div>
                    <div className='intake-form'>
                        intake-form
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Stack