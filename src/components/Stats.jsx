import React from 'react'
import styles from '../style'

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-7`}>
      {stats.map((stat) => (
        <div key={stat.id} className="">
          <h4 className='font-poppins font-semibold xs:test-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal xs:test-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.title}</p>

        </div>
      ))}
      </section>
  )


export default Stats