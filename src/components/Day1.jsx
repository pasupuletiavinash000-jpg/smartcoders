import React from 'react';

function Day1() {
  return (
    <div>
      {/* --- SECTION 1: NOTES --- */}
      <h3 style={{ color: '#38bdf8' }}>📚 Day 1: Binary Search Notes</h3>
      
      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h4 style={{ color: '#fff', marginTop: 0 }}>What is Binary Search?</h4>
        <p style={{ color: '#cbd5e1' }}>
          Binary Search is an efficient algorithm for finding an item from a <strong>sorted list</strong> of items. 
          It works by repeatedly dividing in half the portion of the list that could contain the item, 
          until you've narrowed down the possible locations to just one.
        </p>
        <ul style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          <li><strong>Condition:</strong> The array MUST be sorted.</li>
          <li><strong>Time Complexity:</strong> O(log N) - Very fast (even for millions of items).</li>
          <li><strong>Space Complexity:</strong> O(1) - Uses no extra memory.</li>
        </ul>
      </div>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '30px 0' }} />

      {/* --- SECTION 2: EXAMPLE PROBLEM (DRY RUN) --- */}
      <h4 style={{ color: '#facc15' }}>🧮 Example Problem (Step-by-Step)</h4>
      <p>
        <strong>Input Array:</strong> <code>[2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</code>
        <br />
        <strong>Target to Find:</strong> <code>23</code>
      </p>

      {/* Custom Table for Trace */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '15px', color: '#e2e8f0' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #38bdf8', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Iteration</th>
            <th style={{ padding: '10px' }}>Low</th>
            <th style={{ padding: '10px' }}>High</th>
            <th style={{ padding: '10px' }}>Mid Index</th>
            <th style={{ padding: '10px' }}>Mid Value</th>
            <th style={{ padding: '10px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
            <td style={{ padding: '10px' }}>1</td>
            <td style={{ padding: '10px' }}>0</td>
            <td style={{ padding: '10px' }}>9</td>
            <td style={{ padding: '10px' }}>4</td>
            <td style={{ padding: '10px' }}>16</td>
            <td style={{ padding: '10px', color: '#f472b6' }}>16 &lt; 23 (Move Right)</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>2</td>
            <td style={{ padding: '10px' }}>5</td>
            <td style={{ padding: '10px' }}>9</td>
            <td style={{ padding: '10px' }}>7</td>
            <td style={{ padding: '10px' }}>56</td>
            <td style={{ padding: '10px', color: '#f472b6' }}>56 &gt; 23 (Move Left)</td>
          </tr>
          <tr style={{ background: 'rgba(34, 197, 94, 0.1)', borderLeft: '3px solid #22c55e' }}>
            <td style={{ padding: '10px' }}>3</td>
            <td style={{ padding: '10px' }}>5</td>
            <td style={{ padding: '10px' }}>6</td>
            <td style={{ padding: '10px' }}><strong>5</strong></td>
            <td style={{ padding: '10px' }}><strong>23</strong></td>
            <td style={{ padding: '10px', color: '#22c55e', fontWeight: 'bold' }}>23 == 23 (Found!)</td>
          </tr>
        </tbody>
      </table>

      <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '30px 0' }} />

      {/* --- SECTION 3: CODE --- */}
      <h4 style={{ color: '#4ade80' }}>💻 Java Solution</h4>
      <pre>
{`public class BinarySearch {
    public static int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;

        while (low <= high) {
            // Find the middle index
            int mid = low + (high - low) / 2;

            // Check if target is present at mid
            if (nums[mid] == target) {
                return mid; // Target Found
            }

            // If target is greater, ignore left half
            if (nums[mid] < target) {
                low = mid + 1;
            }
            // If target is smaller, ignore right half
            else {
                high = mid - 1;
            }
        }
        return -1; // Target not found
    }
}`}
      </pre>
    </div>
  );
}

export default Day1;