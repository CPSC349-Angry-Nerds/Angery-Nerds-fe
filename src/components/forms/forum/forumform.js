import React from 'react'

export default function forumform() {
    return (
        <React.Fragment>
           {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Angry Post
            </button>

            {/* <!-- Modal --> */}
            <form class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New Forum Post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="title" class="col-form-label"></label>
                                    <input type="text" class="form-control" placeholder="Title" id="title"></input>
                                </div>
                                <div class="form-group">
                                    <label for="content" class="col-form-label"></label>
                                    <textarea class="form-control" placeholder="Content" id="content"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </form>
       </React.Fragment>
    )
}
