import React from 'react'
import SectionOne from './profile-components/SectionOne'
import SectionTwo from './profile-components/SectionTwo'
import SectionThree from './profile-components/SectionThree'
import SectionFour from './profile-components/SectionFour'
import SectionFive from './profile-components/SectionFive'
import SectionSix from './profile-components/SectionSix'
import '../../../assets/css/profile.css'
const Profile = ({student}) => {
  console.log(student)
  return (
    <>
    <SectionOne student={student} />
    <SectionTwo student={student} />
    <SectionThree student={student} />
    <SectionFour student={student} />
    <SectionFive student={student} />
    <SectionSix student={student} />
    </>
  )
}

export default Profile