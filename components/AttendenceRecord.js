import React from 'react';
import { Calendar } from 'react-native-calendars';


export default function Schedule() {
    const DAYS = new Map([
        ['2021-03-09', "Holiday"],
        ['2021-03-19', "Holiday"],
        ['2021-03-22', "Holiday"],
        ['2021-03-29', "Holiday"],
        ['2021-03-01', "Workday"],
        ['2021-03-02', "Workday"],
        ['2021-03-03', "Workday"],
        ['2021-03-04', "Workday"],
        ['2021-03-05', "Workday"],
        ['2021-03-08', "Workday"],
        ['2021-03-09', "Workday"],
        ['2021-03-10', "Workday"],
    ]);
    const getMarkedHolidays = function(days){
        const markedDates = {};
    
        for( const [key,value] of days){
            if(value == "Holiday"){
                markedDates[key] = { color: '#ffff00'};
            }
        }
        return markedDates;
    };
    const getMarkedWorkdays = function(days){
        const markedDates = {};
        for( const [key,value] of days){
            if(value === "Workday"){
                markedDates[key] = { color: '#3377ff'};
            }
        
        }
        return markedDates;
    };
    const test = function(holidays,workdays){
        const schedule ={
            ...holidays,
            ...workdays
        };
        return schedule;
    };    
    return (
        <Calendar 
            markedDates={test(getMarkedHolidays(DAYS), getMarkedWorkdays(DAYS))} 
            markingType={'period'}
        />
    );
};
