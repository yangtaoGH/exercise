"""import flask, json

server=flask.Flask(__name__)
@server.route('/login', methods=['get', 'post'])
def login():
    loginName = flask.request.form.get('user')
    password = flask.request.form.get('pwd')
    # 首先需要查询该用户是否存在，然后查看该用户的密码是否正确，
    print(loginName, password,'读取数据')
    if loginName and password:
        res = {
            'msg': '登录成功',
            'status': 'ok'
        }
    else:
        res = {  
            'msg': '密码或者用户名错误',
            'status': 'false'
        }
    return json.dumps(res, ensure_ascii=False)
if __name__ == '__main__':
    server.run(
        host = '127.0.0.1',
        port = 8000,
        debug=True
    )
"""

"""
 # 连接数据库
    db=pymysql.connect('localhost','root','root','TEST')
    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor=db.cursor()
    #mysql语句
    sql='select item_id,item_title,item_image,item_price,num from tb_cart;'
    # 执行sql语句
    cursor.execute(sql)
    # 获取所有游标
    data1=cursor.fetchall()
    # 因为data1为元组，到传到前端只能读取到一条信息，所以要转成列表
    data=list(data1)
    # 给前端返回数据标名数据类型，前端好区分需求数据
    content={'type':'getContentList','data':data}
    print(data,'12311111')
    # 将整理好的数据返回到前端
    sio.emit('reply',content)
"""
# sep以逗号隔开，以感叹号结尾

"""
用Python的turtle模块绘制国旗
"""
import turtle

""" 
def draw_rectangle(x, y, width, height):
    #绘制矩形
    turtle.goto(x, y)
    # 线条的颜色
    turtle.pencolor('red')
    turtle.fillcolor('red')
    turtle.begin_fill()
    for i in range(2):
        turtle.forward(width)
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)
    turtle.end_fill()


def draw_star(x, y, radius):
    #绘制五角星
    turtle.setpos(x, y)
    pos1 = turtle.pos()
    turtle.circle(-radius, 72)
    pos2 = turtle.pos()
    turtle.circle(-radius, 72)
    pos3 = turtle.pos()
    turtle.circle(-radius, 72)
    pos4 = turtle.pos()
    turtle.circle(-radius, 72)
    pos5 = turtle.pos()
    turtle.color('yellow', 'yellow')
    turtle.begin_fill()
    turtle.goto(pos3)
    turtle.goto(pos1)
    turtle.goto(pos4)
    turtle.goto(pos2)
    turtle.goto(pos5)
    turtle.end_fill()


def main():
    #主程序
    turtle.speed(12)
    turtle.penup()
    x, y = -270, -180
    # 画国旗主体
    width, height = 540, 360
    draw_rectangle(x, y, width, height)
    # 画大星星
    pice = 22
    center_x, center_y = x + 5 * pice, y + height - pice * 5
    turtle.goto(center_x, center_y)
    turtle.left(90)
    turtle.forward(pice * 3)
    turtle.right(90)
    draw_star(turtle.xcor(), turtle.ycor(), pice * 3)
    x_poses, y_poses = [10, 12, 12, 10], [2, 4, 7, 9]
    # 画小星星
    for x_pos, y_pos in zip(x_poses, y_poses):
        turtle.goto(x + x_pos * pice, y + height - y_pos * pice)
        turtle.left(turtle.towards(center_x, center_y) - turtle.heading())
        turtle.forward(pice)
        turtle.right(90)
        draw_star(turtle.xcor(), turtle.ycor(), pice)
    # 隐藏海龟
    turtle.ht()
    # 显示绘图窗口
    turtle.mainloop()

# 告诉别人代码程序的入口在这
if __name__ == '__main__':
    main() """


#设置画布的大小
#turtle.screesize(canvwidth=None, canvheight=None, bg=None)


  
#绘制长方体
def draw_r(x, y, width, height):
    # 规定起点位置
    turtle.goto(x, y)
    #设置画布的尺寸以及宽度 相当于填充以及边框的颜色都设置好了
    # turtle.pencolor('red') turtle.fillcolor('red')
    turtle.color('red', 'red')
    # 要填充的地方开始进行填充操作
    turtle.begin_fill()
    # 因为长方体就是长宽的尺寸不一样，所以需要两组数据
    for i in range(2):
        # 绘制长方形的宽度
        turtle.forward(width)
        # 绘制长方形的旋转角度，逆时针90度
        turtle.left(90)
        turtle.forward(height)
        turtle.left(90)
    turtle.end_fill()
x = -270
y = -180
width = 540
height = 360
# turtle.penup()
draw_r(x, y, width, height)

def draw_s(x, y, length, deg, setHed):
    # 首先绘制一个大的五角星
    turtle.goto(x, y)
    turtle.color('yellow')
    turtle.begin_fill()
    if setHed:
        turtle.setheading(setHed)
    for _ in range(5):
        turtle.forward(length)
        turtle.right(deg)
    turtle.end_fill()

#  大五角星
draw_s(-180, 60, 100, 144, 0)

# 4个小五角星
draw_s(-40, 120, 25, 144, 15)
draw_s(-10, 80, 25, 144, 10)
draw_s(-10, 40, 25, 144, -5)
draw_s(-40, 0, 25, 144, -15)
# 打开画布
turtle.mainloop()