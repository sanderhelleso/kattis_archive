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
    
    x := getN() - 1
    y := getN() / getN()
    
    if x % y == 0 {
        fmt.Println(x / y)
    } else {
        fmt.Println((x / y) + 1)
    }
}    
    
