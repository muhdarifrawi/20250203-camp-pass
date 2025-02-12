function mockInfo() {
    let data = {
        "personnel": [
            { 
                "firstName": "Hawk", 
                "lastName": "Eye", 
                "username": "hawkeye", 
                "password": "password123", 
                "unit": "3DIV", 
                "company": "none", 
                "platoon": "none",
                "designation": "admin",
                "permissions": "full-control" 
            },
            { 
                "firstName": "John", 
                "lastName": "Doe", 
                "username": "johndoe", 
                "password": "password123", 
                "unit": "32CSSB", 
                "company": "security", 
                "platoon": "hq", 
                "designation": "oc",
                "permissions": "company-control" 
            },
            { 
                "firstName": "James", 
                "lastName": "Poe", 
                "username": "jamespoe", 
                "password": "password123", 
                "unit": "32CSSB", 
                "company": "security", 
                "platoon": "hq", 
                "designation": "2ic",
                "permissions": "company-control" 
            },
            { 
                "firstName": "Jack", 
                "lastName": "Joe", 
                "username": "jackjoe", 
                "password": "password123", 
                "unit": "32CSSB", 
                "company": "security",  
                "platoon": "2", 
                "designation": "pc",
                "permissions": "platoon-control" 
            },
            { 
                "firstName": "Peter", 
                "lastName": "Jackson", 
                "username": "peterjackson", 
                "password": "password123", 
                "unit": "32CSSB", 
                "company": "security",  
                "platoon": "2", 
                "designation": "ps",
                "permissions": "platoon-control" 
            },
            { 
                "firstName": "Wes", 
                "lastName": "Anderson", 
                "username": "wesanderson", 
                "password": "password123", 
                "unit": "32CSSB", 
                "company": "security",  
                "platoon": "2", 
                "designation": "man",
                "permissions": "user-only"  
            }
        ]
    }

    return data
}