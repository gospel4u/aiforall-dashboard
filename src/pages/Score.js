import React from 'react'

function Score() {
    return (
        <div>
            <div className="block-header">
                <div className="block-title">3. 과제 및 점수 공지 현황</div>
            </div>
            <div className="block-content">
            <table class="table table-hover">
                <thead>
                  {/* <tr>
                    <th scope="col" class="table-head-data">이름</th>
                    <th scope="col" class="table-head-data">점수 공지 링크</th>
                    <th scope="col" class="table-head-data">점수 공지 날짜</th>
                  </tr> */}
                </thead>
                <tbody class="table-head-data">
                    {/* <tr>
                        <th scope="col" class="table-head-data"> HW1. HW2 </th>   
                        <td scope="col" class="table-head-data"> <a href="https://piazza.com/class/k7222vwq8y61ni?cid=211">[점수] HW1, HW2 점수를 공지합니다.</a> </td>  
                        <th scope="col" class="table-head-data"> 20.03.11 AM 02:50 </th>   
                    </tr> */}
                    
                    
                </tbody>
            </table>
            - 시험, 과제 점수 문의는 <mark>공개 이후 72시간내 해주세요.</mark> 이후 문의 및 성적 정정은 어렵습니다.   <br/>
            - 제출 기간 이후 24시간 이내 제출 시 25% 감점. 48시간 이내 제출 시 50% 감점입니다. 모든 과제 동일합니다.   <br/>
            - KMOOC는 응시 직후 자신의 점수를 확인할 수 있기에 학기말에 최종 점수를 일괄 발표합니다.

            </div>
        </div>
    )
}

export default Score
