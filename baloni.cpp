#include <stdio.h>

using namespace std;

int main() {
    int n;
    int ballons[1000001];

    scanf("%d", &n);
    for (int i = 0; i < n; ++i) {
        scanf("%d", &ballons[i]);
    }

    int shoots = 0;
    int popped = 0;
    while (popped < n) {
        for (int i = 0; i < n; ++i) {
            if (ballons[i] > 0) {
                shoots++;
                int h = ballons[i];
                for (int j = i; j < n; ++j) {
                    if (h <= 0) break;
                    if (ballons[j] == h) {
                        ballons[j] = 0;
                        h--;
                        popped++;
                    }
                }
            }
        }
    }
    
    printf("%d\n", shoots);
}
