import styled from 'styled-components'
import React from 'react'
import {categories} from '../data'
import Categoryitem from './Categoryitem'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;

`
const Categories = () => {
    return (
        <Container>
            {categories.map((item) => {
                return (
                    <Categoryitem item={item} key={item.id}/> 
                )
            })}
        </Container>
    )
}

export default Categories