import React from 'react'

function KMOOC_Famouse() {
    return (
        <div>
            <div>
            <div className="block-header">
                    <div className="block-title">2-1. KMOOC 명강의 퀴즈 응시 일정</div>
            </div>
            <div className="block-content">
            <p>-<a href="https://piazza.com/class/kjtgg3zcy4l4of?cid=75"> [명강의 수강법] 를 참고해주세요.</a></p>
            <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" class="table-head-data">KMOOC 주차</th>
                    <th scope="col" class="table-head-data">응시 기간</th>
                    <th scope="col" class="table-head-data">제출방법</th>
                  </tr>
                </thead>
                <tbody class="table-head-data">
                    { <tr>
                        <th scope="col" class="table-head-data"> KMOOC 명강의 1주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="">1주차 월요일(3/1) 9:00 ~ 3주차 토요일(3/20) 23:30</div> </td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td> 
                    </tr> }
                    {/* <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 2주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">3주차 월요일 9:30 ~ 4주차 월요일 23:55 </div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 3주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">4주차 월요일 9:30 ~ 5주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 4주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">5주차 월요일 9:30 ~ 6주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 명강의 5주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">6주차 월요일 9:30 ~ 7주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data"> KMOOC 명강의 6주차 퀴즈 </th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">7주차 월요일 9:30 ~ 8주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 7주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">8주차 월요일 9:30 ~ 9주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 8주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">9주차 월요일 9:30 ~ 10주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 9주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">10주차 월요일 9:30 ~ 11주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 10주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">11주차 월요일 9:30 ~ 12주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 11주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">12주차 월요일 9:30 ~ 13주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td>  
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 12주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">13주차 월요일 9:30 ~ 14주차 월요일 23:55</div></td>   
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td> 
                    </tr>
                    <tr>
                        <th scope="col" class="table-head-data">KMOOC 명강의 13주차 퀴즈</th>    
                        <td scope="col" class="table-head-data"> <div class="over-due">14주차 월요일 9:30 ~  15주차 월요일 23:55</div></td> 
                        <td scope="col" class="table-head-data"> 응시 기간 내 KMOOC에서 시험 응시 </td> 
                    </tr> */}
                </tbody>
            </table>

            </div>
        </div>
        </div>
    )
}

export default KMOOC_Famouse
