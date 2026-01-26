import React from 'react';

function Day1() {
  return (
    <div>
      {/* Header Section */}
      <h3 style={{ color: '#38bdf8' }}>🚀 Day 1: Arrays - Second Largest Element</h3>
      <p>
        <strong>Problem Statement:</strong> Given an array of integers, find the second largest distinct element. 
        If it does not exist, return -1.
      </p>
      <p>
        <strong>LeetCode Reference:</strong> <span style={{ color: '#facc15' }}>Problem #215</span> (Kth Largest Element)
      </p>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />

      {/* Approach 1: Brute Force */}
      <h4 style={{ marginTop: '20px', color: '#f472b6' }}>1️⃣ Brute Force Approach</h4>
      <p>
        <strong>Logic:</strong> Sort the array in ascending order. The largest element will be at the end. 
        Traverse from the back to find the first element different from the largest.
      </p>
      <p><strong>Time Complexity:</strong> O(N log N) (due to sorting)</p>
      
      <pre>
{`// Java Code (Brute Force)
import java.util.Arrays;

public class Solution {
    public static int getSecondLargest(int[] arr) {
        int n = arr.length;
        if (n < 2) return -1;

        // Step 1: Sort the array
        Arrays.sort(arr);

        // Step 2: Traverse from second last element
        int largest = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            if (arr[i] != largest) {
                return arr[i]; // Found second largest
            }
        }
        return -1; // No second largest found
    }
}`}
      </pre>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />

      {/* Approach 2: Optimal */}
      <h4 style={{ marginTop: '20px', color: '#4ade80' }}>2️⃣ Optimal Approach (Single Pass)</h4>
      <p>
        <strong>Logic:</strong> Traverse the array once. Keep track of two variables: <code>largest</code> and <code>secondLargest</code>. 
        Update them as you iterate through the numbers.
      </p>
      <p><strong>Time Complexity:</strong> O(N) (Single Pass)</p>
      <p><strong>Space Complexity:</strong> O(1)</p>

      <pre>
{`// Java Code (Optimal Solution)
public class Solution {
    public static int getSecondLargest(int[] arr) {
        int n = arr.length;
        if (n < 2) return -1;

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            // Case 1: Found a new largest
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            }
            // Case 2: Found a candidate for second largest
            else if (arr[i] > secondLargest && arr[i] != largest) {
                secondLargest = arr[i];
            }
        }

        // Check if secondLargest was actually updated
        return (secondLargest == Integer.MIN_VALUE) ? -1 : secondLargest;
    }
}`}
      </pre>
    </div>
  );
}

export default Day1;