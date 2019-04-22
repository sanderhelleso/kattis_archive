package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strings"
    "strconv"
)

// utils to handle i/o *******************************/

var reader = bufio.NewReaderSize(os.Stdin, 16*1024*1024)

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func getN() int {
    var n int
    _, _ = fmt.Scanf("%d", &n)
    return n
}

func strToInt(s string) int {
    n, _ := strconv.Atoi(s)
   return n
}

/***************************************************/


func main() {
    
    nCards := getN();
    stack := make([]int, 0)
    
    for nCards > 0 {
        card := getN();
        if len(stack) > 0 && (stack[len(stack) - 1] + card) % 2 == 0 {
            stack = stack[:len(stack) - 1]
        } else {
            stack = append(stack, card)
        }
        
        nCards--
    }
    
    fmt.Println(len(stack))
}    
    
