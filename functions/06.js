const sum = (x) => {
    return (y) => {
        return (z) => {
            console.log(x + y + z)
        }
    }
}

sum(1)(2)(3)