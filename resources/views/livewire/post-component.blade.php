<div>
    @if (session()->has('success'))
        <div class="alert alert-success mt-4 ml-4 mr-4 col-4" role="alert">
            {{ session('success') }}
        </div>
    @endif

    <div class="row justify-content-center align-items-center g-2">

        <div class="col">
            <button class="btn text-bg-primary" wire:click="create">
                Add Post
            </button>
        </div>

        @if ($isOpen)

            <div class="modal show" tabindex="-1" role="dialog" style="display: block;">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="staticBackdropLabel">{{ $postId ? 'Edit Post' : 'Create Post' }}
                            </h3>
                        </div>

                        <form wire:submit.prevent="{{ $postId ? 'update' : 'store' }}">

                            <div class="modal-body">

                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="title" wire:model.live="title"
                                        placeholder="..." required>
                                    <label for="title">Title</label>
                                    <span class="text-red-500">
                                        @error('title')
                                            {{ $message }}
                                        @enderror
                                    </span>
                                </div>

                                <div class="form-floating mb-3">
                                    <textarea class="form-control h-100px" id="body" wire:model.live="body" placeholder="..." required></textarea>
                                    <label for="floatingTextarea">Body</label>
                                    <span class="text-red-500">
                                        @error('body')
                                            {{ $message }}
                                        @enderror
                                    </span>
                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" wire:click="closeModal">Close</button>
                                <button type="submit"
                                    class="btn btn-primary">{{ $postId ? 'Update' : 'Create' }}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>

        @endif

    </div>

    <div class="row justify-content-center align-items-center g-2">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            @forelse ($posts as $post)
                <tbody wire:key="{{ $post->id }}">
                    <tr>
                        <th scope="row">{{ $post->id }}</th>
                        <td> {{ $post->title }}</td>
                        <td> {{ $post->body }}</td>
                        <td>
                            <span wire:click="edit({{ $post->id }})" class="cursor-pointer"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-pencil cursor-pointer" viewBox="0 0 16 16">
                                    <path
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </span>
                            <span wire:click="delete({{ $post->id }})" class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </span>
                        </td>
                    </tr>
                </tbody>
            @empty
                <p>No post found</p>
            @endforelse
        </table>

        {{ $posts->links() }}
    </div>
</div>