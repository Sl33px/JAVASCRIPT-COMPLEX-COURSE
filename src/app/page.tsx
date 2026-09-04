"use client"

import Link from "next/link";

export default function Page() {
    return (
      <div>
          Home page
          <hr/>
          <ul>
              <Link href={'/hw1'}>Homework 1</Link><br/><br/>
              <Link href={'/hw2'}>Homework 2</Link><br/><br/>
              <Link href={'/hw3'}>Homework 3</Link>
          </ul>
      </div>
    );
}