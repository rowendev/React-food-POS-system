import React from "react";
import classes from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const MealList = (props) => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {props.data.map((meal) => (
            <MealItem
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              key={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default MealList;
