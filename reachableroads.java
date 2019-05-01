import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Graph {
    
    private ArrayList<Node> destinations = new ArrayList<Node>();
    private int connectedRoutes = 0;
    
    public void addDestination(Node desination) {
        this.destinations.add(desination);
    }
    
    public ArrayList<Node> getDestinations() {
        return this.destinations;
    }
    
    public void printConnectedRoutesAmount() {
        System.out.println(this.connectedRoutes - 1);
    }
    
    public void printGraph() {
        for (Node destination : this.destinations) {
            System.out.println(destination);
        }
    }
    
    public void getConnectedRoutes() {
        
        for (int i = 0; i < this.destinations.size(); i++) {

            if (!this.destinations.get(i).isVisited()) {
                this.connectedRoutes++;
                dfs(this.destinations.get(i));
            }
        }
    }
    
    private void dfs(Node cl) {
        if (cl.isVisited()) return;

        // mark node as visited
        cl.setVisited();
        
        for (Node node : cl.getNeighbours()) {
            dfs(node);
        }          
    }
    
    
    public static class Node {
        
        private int destination;
        private boolean visited;
        private ArrayList<Node> neighbours = new ArrayList<Node>();
        
        public Node(int destination) {
            this.destination = destination;
        }
        
        public void setNeighbour(Node node) {
            this.neighbours.add(node);
        }
        
        public void setVisited() {
            this.visited = true;
        }
        
        public boolean isVisited() {
            return this.visited;
        }
        
        public int getDestination() {
            return this.destination;
        }
        
        public ArrayList<Node> getNeighbours() {
            return this.neighbours;
        }
    }
    
    public static void main(String[] args) throws IOException {
        
        Scanner scanner = new Scanner(System.in);
        
        int t = scanner.nextInt();
        while(t > 0) {
            
            int m = scanner.nextInt();
            int r = scanner.nextInt();
            
            // map out routes between graphs
            Graph graph = new Graph();
            ArrayList<Node> destinations = graph.getDestinations();
            
            for (int i = 0; i < m; i++) {
                Node node = new Node(i);
                destinations.add(node);
            }
            
            for (int i = 0; i < r; i++) {
                    
                int r1 = scanner.nextInt();
                int r2 = scanner.nextInt();
                
                destinations.get(r1)
                .setNeighbour(destinations.get(r2));

                destinations.get(r2)
                .setNeighbour(destinations.get(r1)); 
                
            }            

            graph.getConnectedRoutes();
            graph.printConnectedRoutesAmount();
                        
            t--;
        }
    }
}
