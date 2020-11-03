var validation = {
    /**
     * @name validateEmail
     * @param {value} 
     * @description 이메일검증
     */
    validateEmail (value) {
        const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        return re.test(value)
    },
    /**
     * @name validatePassword
     * @param {value} 
     * @description 패스워드 검증(대소문자)
     */
    validatePassword (value) {
        const re = /^[A-Za-z]\w{8,14}$/
        return re.test(value)
    },
    /**
     * @name validatePasswordWithNumber
     * @param {value} 
     * @description 패스워드 검증(대소문자,숫자)
     */
    validatePasswordWithNumber (value) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
        return re.test(value)
    },
    /**
     * @name validatePasswordWithNumberAndSpecial
     * @param {value} 
     * @description 패스워드 검증(대소문자,숫자,특수문자)
     */
    validatePasswordWithNumberAndSpecial (value) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,14}$/
        return re.test(value)
    },
    /**
     * @name validateNotEmpty
     * @param {value} 
     * @description 공백검증
     */
    validateNotEmpty (value) {
        const re = /^(?!\s*$).+/g
        return re.test(value)
    },
    /**
     * @name validateKorean
     * @param {value} 
     * @description 공백검증
     */
    validateKorean (value) {
        const re = /^[ㄱ-ㅎ가-힣]*$/
        return re.test(value)
    },
    /**
     * @name validateTrueCheck
     * @param {value} 
     * @description 참체크
     */
    validateTrueCheck (value) {
        const re = /^([Tt][Rr][Uu][Ee])$/
        return re.test(value)
    },
    /**
     * @name validateFalseCheck
     * @param {value} 
     * @description 거짓체크
     */
    validateFalseCheck (value) {
        const re = /^([Ff][Aa][Ll][Ss][Ee])$/
        return re.test(value)
    },
    /**
     * @name validateFutureCheck
     * @param {value} 
     * @description 미래체크
     */
    validateFutureCheck (value) {
        const now = new Date()
        const check = new Date(value)
    
        let gap = now.getTime() - check.getTime()
    
        if (gap > 0) {
        return false
        } else {
        return true
        }
    },
    /**
     * @name validateOldCheck
     * @param {value} 
     * @description 과거체크
     */
    validateOldCheck (value) {
        var now = new Date()
        var check = new Date(value)
      
        var gap = now.getTime() - check.getTime()
      
        if (gap > 0) {
          return true
        } else {
          return false
        }
    },
    validateNullCheck (value) {
        const re = /^$/
        re.test(value)
    }
}

export default validation;