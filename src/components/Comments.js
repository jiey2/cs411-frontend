import React, {Component} from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={(comments)}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
      </Button>
        </Form.Item>
    </>
);



class Comments extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            ItemName: this.props.ItemName,
            comments: (this.props.Comments),
            submitting: false,
            value: '',
            commentToDelete: null,
        }; 

    }

    housekeepingComments(rawcomments) {
    let pComments = [];
    for (var comment of rawcomments) {
        var res = {};
        res['actions'] = [<span id={comment[0]} onClick={this.handleDelete.bind(this)}>Delete</span>]
        res['author'] = "USER";
        res['avatar'] = 'http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon';
        res['content'] = comment[1];
        res['datetime'] = moment.unix(comment[2]).fromNow();

        pComments.push(res);
    }
    console.log(pComments);
    return pComments;
    };

    async handleDelete (event) {
        event.preventDefault()
        console.log(this.state.comments)
        //this.setState({comments: this.state.comments.filter()})
        await this.setState({commentToDelete: event.target.id})
        const url = "http://api.996.com.de/item/comments/deleteComment"
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                commentId: this.state.commentToDelete,
            })
        };
        await fetch(url, requestOptions);
        this.props.rerenderCallback();
    }

    async uploadComments() {
        const url = "http://api.996.com.de/item/comments/postComment";
        var timestamp = Math.floor(Date.now() / 1000);
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                ItemName: this.state.ItemName,
                Body: this.state.value,
                CreatedAt: timestamp,
            })
        };
        await fetch(url, requestOptions);
    }

    handleSubmit = () => {
        if (this.state.value !== '') {
            this.setState({
                submitting: false,
            });
            this.uploadComments()
            this.props.rerenderCallback();

            return;
        }

        


        this.setState({
            submitting: true,
        });

        // setTimeout(() => {
        //     this.setState({
        //         submitting: false,
        //         value: '',
        //         comments: [
        //             {
        //                 author: 'Han Solo',
        //                 avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        //                 content: <p>{this.state.value}</p>,
        //                 datetime: moment().fromNow(),
        //             },
        //             ...this.state.comments,
        //         ],
        //     });
        // }, 1000);
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments,submitting, value } = this.state;

        return (
            <>
                {this.housekeepingComments(comments).length > 0 && <CommentList id="commentList" comments={this.housekeepingComments(comments)} />}
                <Comment
                    avatar={
                        <Avatar size={40}>User</Avatar>
                    }
                    content={
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    }
                />
            </>
        );
    }
}
 
export default Comments;