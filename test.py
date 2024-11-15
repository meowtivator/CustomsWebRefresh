import random

# 보드 초기화 및 출력
def initialize_board():
    return [[" " for _ in range(3)] for _ in range(3)]

def print_board(board):
    print("\n")
    for row in board:
        print(" | ".join(row))
        print("-" * 5)
    print("\n")

# 사용자 입력 처리
def get_player_move(board):
    while True:
        try:
            move = int(input("Enter your move (1-9): ")) - 1
            row, col = divmod(move, 3)
            if 0 <= move < 9 and board[row][col] == " ":
                return row, col
            else:
                print("Invalid move. Try again!")
        except ValueError:
            print("Please enter a number between 1 and 9.")

# 컴퓨터 AI
def get_computer_move(board):
    # 빈 칸 리스트 생성
    empty_cells = [(r, c) for r in range(3) for c in range(3) if board[r][c] == " "]
    return random.choice(empty_cells)

# 승리 조건 검사
def check_winner(board, player):
    # 행, 열, 대각선 검사
    for i in range(3):
        if all(board[i][j] == player for j in range(3)):  # 행
            return True
        if all(board[j][i] == player for j in range(3)):  # 열
            return True
    if all(board[i][i] == player for i in range(3)):  # 왼쪽 대각선
        return True
    if all(board[i][2 - i] == player for i in range(3)):  # 오른쪽 대각선
        return True
    return False

# 무승부 검사
def is_draw(board):
    return all(board[r][c] != " " for r in range(3) for c in range(3))

# 메인 게임 루프
def play_game():
    print("Welcome to Tic-Tac-Toe!")
    board = initialize_board()
    current_player = "X"  # 사용자
    computer = "O"

    while True:
        print_board(board)
        if current_player == "X":
            row, col = get_player_move(board)
        else:
            print("Computer is making a move...")
            row, col = get_computer_move(board)
        
        board[row][col] = current_player

        if check_winner(board, current_player):
            print_board(board)
            print(f"{current_player} wins!")
            break
        elif is_draw(board):
            print_board(board)
            print("It's a draw!")
            break
        
        # 플레이어 전환
        current_player = computer if current_player == "X" else "X"

# 실행
if __name__ == "__main__":
    while True:
        play_game()
        replay = input("Do you want to play again? (y/n): ").lower()
        if replay != "y":
            print("Thanks for playing!")
            break