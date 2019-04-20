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
    
    for 1 < 2 {
        in := strings.Split(readLine(reader), " ")
        if len(in) != 7 { break }
        
        m := strToInt(in[0]);
        p := strToInt(in[1])
        l := strToInt(in[2])
        e := strToInt(in[3])
        r := strToInt(in[4])
        s := strToInt(in[5])
        n := strToInt(in[6])
        
        for n > 0 {
            tp := p
            p = l / r
            l = e * m
            m = tp / s
            
            n--
        }
        
        fmt.Println(m)
    }
}    
    
