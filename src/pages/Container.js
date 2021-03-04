import React from 'react'
import Lectures from './Lectures'
import KMOOC_Famouse from './KMOOC_Famouse'
import KMOOC_AI from './KMOOC_AI'
import PYF from './pyf'
import Project from './Project'
import Score from './Score'
import Bible from './Bible'
import Footer from './Footer'
import Button from './Button'


function Container() {
    return (
        <div>
            <div className="border-box">
                <Button />
                <Lectures />
                {/* <Announce /> */}
                <KMOOC_Famouse />
                <KMOOC_AI />
                {/* <PYF /> */}
                {/*<Score />*/}
                {/* <Project /> */}
                <Bible />
            </div>
            <Footer />
        </div>

    )
}

export default Container
