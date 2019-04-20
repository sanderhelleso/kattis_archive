package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
)

// utils to handle i/o *******************************/

func strToInt(val string) int {
    if val, err := strconv.Atoi(val); err == nil {
        return val
    }

    return 0
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

/***************************************************/

func main() {
    reader := bufio.NewReaderSize(os.Stdin, 16*1024*1024)
    
    cases := strToInt(readLine(reader))
    
    for i := 0; i < cases; i++ {
        
        dataset := strings.Split(readLine(reader), " ")
        n := strToInt(dataset[0])
        avg := 0
        
        for j := 1; j < n + 1; j++ {
            avg += strToInt(dataset[j])
        }
        
        avg /= n
        nAboveMean := 0
        
        for j := 1; j < n + 1; j++ {
            if strToInt(dataset[j]) > avg {
                nAboveMean++
            }
        }
        
        fM, fN := float64(nAboveMean), float64(n)
        fmt.Printf("%.3f%s \n", (fM / fN) * 100, "%")
    }
}
