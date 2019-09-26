import * as R from 'ramda'

export default class moodGenerator {
        points = 0
        mood = 'neutral'
    
        constructor(points=[], mood){
            this.points = points
            this.mood = mood 
        }

        setCurrentMood(mood) {
            this.mood = mood
            return this
        }

        calculateMood(points=this.points) {
            var oneToTen = []
            for (let i = 1; i <= 10; i++) {
                oneToTen.push(i)
            }

            var elevenToTwenty = []
            for (let i = 11; i <= 20; i++) {
                elevenToTwenty.push(i)
            }

            var twentyOneToThirty = [] 
            for (let i = 21; i <= 30; i++) {
                twentyOneToThirty.push(i)
            }

            var zeroToNegOneHundred = []
            for (let i = 0; i > -100; i--) {
                zeroToNegOneHundred.push(i)
            }



            if (oneToTen.includes(points) || 
                zeroToNegOneHundred
            ) {
                this.mood = 'sad'
            }
            
            else if (elevenToTwenty.includes(points)) {
                this.mood = 'neutral'
            }
            
            else if (twentyOneToThirty.includes(points)) {
                this.mood = 'happy'
            } else {
                this.mood = 'happy'
            }
            
            return this.mood
        }

        determinePointValue(category) {
            switch(category.toUpperCase()) {
                case 'VEGGIES':
                    return 10
                case 'FRUIT':
                    return 7
                case 'GRAINS/BEANS': 
                    return 5
                case 'MEAT/ POULTRY, SEAFOOD':
                    return 5
                case 'DAIRY':
                    return 3
                case 'OILS/FATS':
                    return 2
                case 'TREATS': 
                    return -10
                default: 
                    return 0
            }
        }

        crunch(currentPoints=this.points, meals) {
            const allPoints = meals.map(meal => meal.category).map(this.determinePointValue)
            return allPoints.reduce((totalPoints, points) => {
                console.log('calcuclation', totalPoints + points)
                return totalPoints + points
            }, currentPoints)
        }
    }