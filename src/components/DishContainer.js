import React from "react"
import Loading from "./Loading"
import DishList from "./DishList"
import { withDishConsumer } from "../context"

function DishContainer({ context }) {
  const { 
    loading, 
    sortedDishes, 
  } = context
  
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <DishList dishes={sortedDishes} />
    </>
  )
}

export default withDishConsumer(DishContainer)