var questions = [
  {
    question: "Câu 1: Mặt trăng có ánh sáng tự nhiên.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 2: Đại dương Thái Bình Dương nằm ở phía đông của châu Á.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 3: Con người có 5 ngón tay ở mỗi tay.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 4: Nước sôi luôn có nhiệt độ 100 độ C theo thang nhiệt độ Celsius.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 5: Mặt trời quay quanh trái đất.",
    answer: "false",
    type: "true-false"
  },
  {
    question: "Câu 6: Việt Nam có 365 ngày trong một năm dương lịch.",
    answer: "false",
    type: "true-false"
  },
  {
    question: "Câu 7: Có 12 tháng trong một năm.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 8: Trái đất là hành tinh duy nhất trong hệ Mặt Trời có sự sống.",
    answer: "true",
    type: "true-false"
  },
  {
    question: "Câu 9: Mặt trăng có khí quyển.",
    answer: "false",
    type: "true-false"
  },
  {
    question: "Câu 10: Nước biển luôn có màu xanh.",
    answer: "false",
    type: "true-false"
  },  
  {
    question: "Câu 11: Ai là người đầu tiên đặt chân lên mặt trăng?",
    choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: "Neil Armstrong",
    type: "multiple-choice"
  },
  {
    question: "Câu 12: Ai là tác giả của cuốn tiểu thuyết 'Harry Potter'?",
    choices: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephenie Meyer"],
    answer: "J.K. Rowling",
    type: "multiple-choice"
  },
  {
    question: "Câu 13: Thành phố nào được biết đến với tượng Nữ thần Tự do?",
    choices: ["Paris", "New York", "London", "Sydney"],
    answer: "New York",
    type: "multiple-choice"
  },
  {
    question: "Câu 14: Cái gì là ngôn ngữ chính thức của Brazil?",
    choices: ["Tây Ban Nha", "Bồ Đào Nha", "Anh", "Pháp"],
    answer: "Bồ Đào Nha",
    type: "multiple-choice"
  },
  {
    question: "Câu 15: Thành phố nào được biết đến với biển nhiều nhất trên thế giới?",
    choices: ["Venice", "Miami", "Amsterdam", "Bangkok"],
    answer: "Venice",
    type: "multiple-choice"
  },
  {
    question: "Câu 16: Quốc gia nào được biết đến với tượng đài Sphinx và các kim tự tháp lớn?",
    choices: ["Ấn Độ", "Trung Quốc", "Ai Cập", "Hy Lạp"],
    answer: "Ai Cập",
    type: "multiple-choice"
  },
  {
    question: "Câu 17: Loài nào sau đây là loài động vật ăn thịt?",
    choices: ["Elephant", "Giraffe", "Lion", "Horse"],
    answer: "Lion",
    type: "multiple-choice"
  },
  {
    question: "Câu 18: Tác phẩm 'Mona Lisa' được vẽ bởi nghệ sĩ nào?",
    choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
    answer: "Leonardo da Vinci",
    type: "multiple-choice"
  },
  {
    question: "Câu 19: Câu nào sau đây là câu hỏi có 4 đáp án?",
    choices: ["Câu 1", "Câu 2", "Câu 3", "Câu 4"],
    answer: "Câu 1",
    type: "multiple-choice"
  },
  {
    question: "Câu 20: Trong hệ Mặt trời, hành tinh nào gần mặt trời nhất?",
    choices: ["Mars", "Venus", "Mercury", "Earth"],
    answer: "Mercury",
    type: "multiple-choice"
  },
  {
  question: "Câu 21: Những nguyên tố sau đây thuộc nhóm kim loại:",
  choices: ["Sắt", "Oxy", "Nhôm", "Crom"],
  answer: ["Sắt", "Nhôm", "Crom"],
  type: "multiple-answer"
  },
  {
  question: "Câu 22: Các loại môi trường sau đây ảnh hưởng đến sự sống của loài cá:",
  choices: ["Nước lạnh", "Nước ô nhiễm", "Nước có nhiều oxy", "Nước có nhiều muối"],
  answer: ["Nước lạnh", "Nước có nhiều oxy"],
  type: "multiple-answer"
  },
  {
  question: "Câu 23: Các hành động sau đây giúp bảo vệ môi trường:",
  choices: ["Tái chế", "Sử dụng túi nylon một lần", "Sử dụng nhiên liệu hóa thạch nhiều hơn"],
  answer: ["Tái chế"],
  type: "multiple-answer"
  },
  {
  question: "Câu 24: Các mục đích của việc sử dụng máy tính bao gồm:",
  choices: ["Chơi game", "Ghi chép", "Học tập", "Nấu ăn"],
  answer: ["Ghi chép", "Học tập"],
  type: "multiple-answer"
  },
  {
  question: "Câu 25: Những loại thức ăn sau đây thuộc vào nhóm thức ăn có chứa protein:",
  choices: ["Bánh mì", "Trái cây", "Thịt", "Rau cải"],
  answer: ["Thịt"],
  type: "multiple-answer"
  },
  {
  question: "Câu 26: Những quốc gia sau đây nằm ở châu Á:",
  choices: ["Pháp", "Trung Quốc", "Canada", "Brazil"],
  answer: ["Trung Quốc"],
  type: "multiple-answer"
  },
  {
  question: "Câu 27: Các loại hình năng lượng tái tạo gồm:",
  choices: ["Than đá", "Năng lượng mặt trời", "Dầu diesel", "Năng lượng gió"],
  answer: ["Năng lượng mặt trời", "Năng lượng gió"],
  type: "multiple-answer"
  },
  {
  question: "Câu 28: Những ngôn ngữ lập trình sau đây được sử dụng rộng rãi trong phát triển web:",
  choices: ["HTML", "CSS", "Java", "JavaScript"],
  answer: ["HTML", "CSS", "JavaScript"],
  type: "multiple-answer"
  },
  {
  question: "Câu 29: Các mô hình kinh doanh sau đây phổ biến:",
  choices: ["Bán lẻ", "Bán buôn", "Bán hàng online", "Bán hàng bất động sản"],
  answer: ["Bán lẻ", "Bán buôn", "Bán hàng online"],
  type: "multiple-answer"
  },
  {
  question: "Câu 30: Những quy trình sau đây liên quan đến quản lý dự án:",
  choices: ["Lập kế hoạch", "Tổ chức sự kiện", "Thiết kế logo", "Giải quyết xung đột"],
  answer: ["Lập kế hoạch", "Giải quyết xung đột"],
  type: "multiple-answer"
  },
  {
  question: "Câu 31: Hãy mô tả quá trình bạn sử dụng để giải quyết một vấn đề phức tạp.",
  type: "essay"
  },
  {
  question: "Câu 32: Nêu ý nghĩa và tầm quan trọng của giáo dục trong đời sống của con người.",
  type: "essay"
  },
  {
  question: "Câu 33: Hãy chia sẻ một trải nghiệm mà bạn học được điều gì đó quan trọng trong cuộc sống.",
  type: "essay"
  },
  {
  question: "Câu 34: Nêu quan điểm của bạn về vai trò của công nghệ trong cuộc sống hiện đại.",
  type: "essay"
  },
  {
  question: "Câu 35: Phân tích những ảnh hưởng của biến đổi khí hậu đối với môi trường và con người.",
  type: "essay"
  },
  {
  question: "Câu 36: Mô tả một nhân vật từ một cuốn sách hoặc bộ phim mà bạn cảm thấy ấn tượng và giải thích tại sao.",
  type: "essay"
  },
  {
  question: "Câu 37: Hãy so sánh và đối chiếu giữa hai nền văn hóa khác nhau mà bạn biết đến.",
  type: "essay"
  },
  {
  question: "Câu 38: Nêu ý kiến của bạn về vai trò của ngôn ngữ trong việc giao tiếp và hiểu biết.",
  type: "essay"
  },
  {
  question: "Câu 39: Phân tích những tác động tích cực và tiêu cực của phương tiện truyền thông đối với xã hội.",
  type: "essay"
  },
  {
  question: "Câu 40: Mô tả một sự kiện lịch sử quan trọng và giải thích tại sao nó có ảnh hưởng đến thế giới hiện nay.",
  type: "essay"
  } 
];
  
  var quizContainer = document.getElementById('quiz');
  
  function displayQuestions() {
    questions.forEach(function(question, index) {
      var questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = '<p>' + question.question + '</p>';
  
      if (question.type === "true-false") {
        questionDiv.innerHTML += '<div class="choices">' +
                                 '<label><input type="radio" name="q' + index + '" value="true"> Đúng</label>' +
                                 '<label><input type="radio" name="q' + index + '" value="false"> Sai</label>' +
                                 '</div>';
      } else if (question.type === "multiple-choice") {
        question.choices.forEach(function(choice) {
          questionDiv.innerHTML += '<div class="choices">' +
                                   '<label><input type="radio" name="q' + index + '" value="' + choice + '"> ' + choice + '</label>' +
                                   '</div>';
        });
      } else if (question.type === "multiple-answer") {
        question.choices.forEach(function(choice) {
          questionDiv.innerHTML += '<div class="choices">' +
                                   '<label><input type="checkbox" name="q' + index + '" value="' + choice + '"> ' + choice + '</label>' +
                                   '</div>';
        });
      } else if (question.type === "essay") {
        questionDiv.innerHTML += '<div class="choices">' +
                                 '<textarea name="q' + index + '" rows="4" cols="50"></textarea>' +
                                 '</div>';
      }
  
      document.getElementById('quiz').appendChild(questionDiv);
    });
  }
  
  displayQuestions();
  
  function submitQuiz() {
    var score = 0;

    questions.forEach(function(question, index) {
        var userAnswer;

        if (question.type === "true-false" || question.type === "multiple-choice") {
            userAnswer = document.querySelector('input[name="q' + index + '"]:checked');
            if (userAnswer !== null && userAnswer.value === question.answer) {
                score++;
            }
        } else if (question.type === "multiple-answer") {
            var correctChoices = question.answer;
            var selectedChoices = Array.from(document.querySelectorAll('input[name="q' + index + '"]:checked')).map(choice => choice.value);
            if (arraysEqual(correctChoices, selectedChoices)) {
                score++;
            }
        }
    });

    displayResult(score);
}

function displayResult(score) {
    var resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    resultDiv.textContent = "Bạn đã đạt được " + score/4 + " điểm.";
    document.getElementById('quiz').appendChild(resultDiv);
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}