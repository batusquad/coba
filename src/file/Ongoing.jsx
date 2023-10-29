import React from 'react'
import Layout from '../page/Layout'
import DropdownMenu from '../component/Dropdown'

const Ongoing = () => {
  return (
    <Layout>
        <DropdownMenu/>
        <div class="real">
            <table class="table ">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Dana</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2023-10-01</td>
                        <td>Nama 1</td>
                        <td>$100,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2023-10-02</td>
                        <td>Nama 2</td>
                        <td>$200,000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2023-10-03</td>
                        <td>Nama 3</td>
                        <td>$300,000</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2023-10-04</td>
                        <td>Nama 4</td>
                        <td>$400,000</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2023-10-05</td>
                        <td>Nama 5</td>
                        <td>$500,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Layout>
  )
}

export default Ongoing
