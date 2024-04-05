import sqlite3
import csv

# Connect to SQLite database
conn = sqlite3.connect('galaxy.db')
cursor = conn.cursor()

# Create table based on CSV data
with open('planets.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    header = next(csv_reader)  # Read the header row
    columns = ', '.join(header)
    cursor.execute(f'CREATE TABLE planets ({columns})')

    # Insert data from CSV into the table
    for row in csv_reader:
        placeholders = ', '.join(['?' for _ in range(len(row))])
        cursor.execute(f'INSERT INTO planets VALUES ({placeholders})', row)

# Commit changes and close connection
conn.commit()
conn.close()
